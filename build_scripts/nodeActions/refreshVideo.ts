import {chessComService} from "../chessCom/ChessComService.js";
import {chesstempoService} from "../chesstempo/ChesstempoService.js";
import {extractPgnForId} from "../extractPGN.js";
import {combine} from "../combine.js";
import {database, NAMESPACE_VIDEO_SNIPPET} from "../db.js";
import {chess365Service} from "../chess365/Chess365Service.js";
import {lichessMastersService} from "../lichessMasters/LichessMastersService.js";
import {stockfishService} from "../stockfish/StockfishService.js";

async function refreshVideo() {
    let videoId: string | null | undefined = process.env.VIDEO_ID

    if (videoId && videoId.indexOf("/") >= 0) {
        const url = new URL(videoId);
        videoId = url.searchParams.get("v")
    }

    if (!videoId) {
        throw `VIDEO_ID missing`
    }

    const videoSnippet = database.read(NAMESPACE_VIDEO_SNIPPET, videoId);

    if (!videoSnippet) {
        throw `Video not found: ${videoId}`
    }

    extractPgnForId(videoId)
    try {
        await chessComService.loadInfoForId(videoId, true)
    } catch (e) {
        console.error(`Error loading chess.com info: ${e}`)
    }

    try {
        await chesstempoService.loadInfoForId(videoId, true)
    } catch (e) {
        console.error(`Error loading chesstempo.com info: ${e}`)
    }

    try {
        await chess365Service.loadInfoForId(videoId, true)
    } catch (e) {
        console.error(`Error loading 365chess.com info: ${e}`)
    }

    try {
        await lichessMastersService.loadInfoForId(videoId)
    } catch (e) {
        console.error(`Error loading lichess masters info: ${e}`)
    }
    
    await stockfishService.evaluate([videoId], true)

    combine()
}

await refreshVideo();

