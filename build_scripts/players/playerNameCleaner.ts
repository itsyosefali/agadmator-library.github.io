import _ from "lodash";

export default function cleanPlayerName(raw: string): string {
    if ((raw.match(/,/g) || []).length === 1) {
        let splitOnComma = raw.split(",");
        raw = _.trim(splitOnComma[1]) + " " + _.trim(splitOnComma[0])
    }
    raw = _.trim(raw)
        .replaceAll("\r", "")
        .replaceAll("|", "")
        .replaceAll(":", "")
        .replaceAll("\r", "")
        .replaceAll("*", "")
        .replaceAll("[A42]", "")
        .replaceAll(/\([A-Z]*[a-z]*\s*\)/g, "")
        .replaceAll(/\s+\./g, "")
        .replaceAll(/^\.\s+/g, "")
        .replaceAll(/\s{2,}/g, " ")
        .replaceAll(/^\s+/g, "")
        .replaceAll(/\s+$/g, "")
        .replaceAll(/\s+Chapter\s+\d+/g, "")
        .replaceAll(/^Salem Saleh$/g, "A.R. Saleh Salem")
        .replaceAll(/^Abhijeet$/g, "Abhijeet Gupta")
        .replaceAll(/^Adham$/g, "Adham Fawzy")
        .replaceAll(/^Alexandr Hilario Takeda dos Santos Fier$/g, "Alexandr Hilário Takeda Sakai dos Santos Fier")
        .replaceAll(/^Alexey Shirov$/g, "Alexei Shirov")
        .replaceAll(/^Alina$/g, "Alina Kashlinskaya")
        .replaceAll(/^Alireza$/g, "Alireza Firouzja")
        .replaceAll(/^Google Deep Mind AI Alpha Zero$/g, "AlphaZero")
        .replaceAll(/^Google Deep Mind Alpha Zero$/g, "AlphaZero")
        .replaceAll(/^Google Deepmind AI AlphaZero$/g, "AlphaZero")
        .replaceAll(/^Anis Giri$/g, "Anish Giri")
        .replaceAll(/^Anish$/g, "Anish Giri")
        .replaceAll(/^Aryan$/g, "Aryan Tari")
        .replaceAll(/^Aryan \( Tari$/g, "Aryan Tari")
        .replaceAll(/^Awonder$/g, "Awonder Liang")
        .replaceAll(/^Baadur$/g, "Baadur Aleksandrovich Jobava")
        .replaceAll(/^Baadur Jobava$/g, "Baadur Aleksandrovich Jobava")
        .replaceAll(/^Bogdan$/g, "Bogdan-Daniel Deac")
        .replaceAll(/^Bogdan Daniel Deac$/g, "Bogdan-Daniel Deac")
        .replaceAll(/^Borislav Kostic$/g, "Borislav Kostić")
        .replaceAll(/^Carissa$/g, "Carissa Yip")
        .replaceAll(/^Carlos Daniel$/g, "Carlos Daniel Albornoz Cabrera")
        .replaceAll(/^Divya Deshmukh \($/g, "Divya Deshmukh")
        .replaceAll(/^Étienne Bacrot$/g, "Etienne Bacrot")
        .replaceAll(/^Fabiano$/g, "Fabiano Caruana")
        .replaceAll(/^Flesch$/g, "János Flesch")
        .replaceAll(/^Kasparov$/g, "Garry Kasparov")
        .replaceAll(/^Gukesh D.$/g, "Gukesh D")
        .replaceAll(/^Hans Moke$/g, "Hans Moke Niemann")
        .replaceAll(/^Hikaru$/g, "Hikaru Nakamura")
        .replaceAll(/^Hikaru Nakmaura$/g, "Hikaru Nakamura")
        .replaceAll(/^Hikaru Nakmura$/g, "Hikaru Nakamura")
        .replaceAll(/^Yifan$/g, "Hou Yifan")
        .replaceAll(/^Hrant$/g, "Hrant Melkumyan")
        .replaceAll(/^Ian Nepomnioachtchi$/g, "Ian Nepomniachtchi")
        .replaceAll(/^ian Nepomniachtchi$/g, "Ian Nepomniachtchi")
        .replaceAll(/^Jan Krzysztof Duda$/g, "Jan-Krzysztof Duda")
        .replaceAll(/^Jan Krzystzof Duda$/g, "Jan-Krzysztof Duda")
        .replaceAll(/^Krzysztof$/g, "Jan-Krzysztof Duda")
        .replaceAll(/^Krzysztof Duda$/g, "Jan-Krzysztof Duda")
        .replaceAll(/^Jeffery$/g, "Jeffrey Xiong")
        .replaceAll(/^Jeffery Xiong$/g, "Jeffrey Xiong")
        .replaceAll(/^Johan Sebastian Christiansen$/g, "Johan-Sebastian Christiansen")
        .replaceAll(/^Jonas Buhl Bjere$/g, "Jonas Buhl Bjerre")
        .replaceAll(/^Capablanca$/g, "Jose Raul Capablanca")
        .replaceAll(/^K Rathnakaran$/g, "Kantholi Ratnakaran")
        .replaceAll(/^K\.\. Ratnakaran$/g, "Kantholi Ratnakaran")
        .replaceAll(/^Kirill$/g, "Kirill Alekseenko")
        .replaceAll(/^Kiriil Alekseenko$/g, "Kirill Alekseenko")
        .replaceAll(/^Krishnan$/g, "Krishnan Sasikiran")
        .replaceAll(/^Leela Chess ZERO$/g, "Leela Chess Zero")
        .replaceAll(/^Leela Zero$/g, "Leela Chess Zero")
        .replaceAll(/^Leela Zhess Zero$/g, "Leela Chess Zero")
        .replaceAll(/^Leinier$/g, "Leinier Dominguez Perez")
        .replaceAll(/^Leinier Perez Dominguez$/g, "Leinier Dominguez Perez")
        .replaceAll(/^Lenier Perez Dominguez$/g, "Leinier Dominguez Perez")
        .replaceAll(/^Levon FAronian$/g, "Levon Aronian")
        .replaceAll(/^Levon$/g, "Levon Aronian")
        .replaceAll(/^Levon Aronian$/ig, "Levon Aronian")
        .replaceAll(/^Liren$/g, "Ding Liren")
        .replaceAll(/^Liren DIng$/ig, "Ding Liren")
        .replaceAll(/^Liviu$/g, "Liviu Dieter Nisipeanu")
        .replaceAll(/^Carlsen$/g, "Magnus Carlsen")
        .replaceAll(/^Fr. Drunkenstein aka Magnus Carlsen$/g, "Magnus Carlsen")
        .replaceAll(/^Magnus$/g, "Magnus Carlsen")
        .replaceAll(/^Magnus Carlsen and Random Guy$/g, "Magnus Carlsen")
        .replaceAll(/^MagnusCarlsen$/g, "Magnus Carlsen")
        .replaceAll(/^Magnus \( Carlsen$/g, "Magnus Carlsen")
        .replaceAll(/^Magnsu Carlsen$/g, "Magnus Carlsen")
        .replaceAll(/^Marin Bosiocic$/g, "Marin Bosiočić")
        .replaceAll(/^Mateusz bartel$/g, "Mateusz Bartel")
        .replaceAll(/^Maxime Vachier$/g, "Maxime Vachiere-Lagrave")
        .replaceAll(/^Maxime Vachier Lagrave$/g, "Maxime Vachier-Lagrave")
        .replaceAll(/^Maxime Vachiere Lagrave$/g, "Maxime Vachier-Lagrave")
        .replaceAll(/^Maxime Lagrave$/g, "Maxime Vachier-Lagrave")
        .replaceAll(/^Maxime Lagarde$/g, "Maxime Vachier-Lagrave")
        .replaceAll(/^Maxime CVachier-Lagrave$/g, "Maxime Vachier-Lagrave")
        .replaceAll(/^Tal$/g, "Mikhail Tal")
        .replaceAll(/^Mr. Hoodie Guy$/g, "Mr Hoodie Guy")
        .replaceAll(/^NN$/g, "Mr Hoodie Guy")
        .replaceAll(/^Amateur$/g, "Mr Hoodie Guy")
        .replaceAll(/^\?\?\?$/g, "Mr Hoodie Guy")
        .replaceAll(/^Nigel D Short$/g, "Nigel Short")
        .replaceAll(/^Nodirbek$/g, "Nodirbek Abdusattorov")
        .replaceAll(/^Paul\s+Charles\s+Morphy$/g, "Paul Morphy")
        .replaceAll(/^Parham$/g, "Parham Maghsoodloo")
        .replaceAll(/^Parham Magsoodloo$/g, "Parham Maghsoodloo")
        .replaceAll(/^Tigran V Petrosian$/g, "Tigran Vartanovich Petrosian")
        .replaceAll(/^Polina$/g, "Polina Shuvalova")
        .replaceAll(/^Praggnanandhaa$/g, "Praggnanandhaa R")
        .replaceAll(/^Praggnanandhaa Rameshbabu$/g, "Praggnanandhaa R")
        .replaceAll(/^Praggnanandhaa Rameshbamu$/g, "Praggnanandhaa R")
        .replaceAll(/^Rameshbabu Praggnanandhaa$/g, "Praggnanandhaa R")
        .replaceAll(/^R Praggnanandhaa$/g, "Praggnanandhaa R")
        .replaceAll(/^Rameshbabu$/g, "Praggnanandhaa R")
        .replaceAll(/^Radoslaw Wojtaszek$/g, "Radosław Wojtaszek")
        .replaceAll(/^Rashid Nezhmetdinov$/g, "Rashid Gibiatovich Nezhmetdinov")
        .replaceAll(/^Rauf$/g, "Rauf Mamedov")
        .replaceAll(/^Raunak$/g, "Raunak Sadhwani")
        .replaceAll(/^Fischer$/g, "Robert James Fischer")
        .replaceAll(/^Bobby Fischer$/g, "Robert James Fischer")
        .replaceAll(/^Sergey Krjakin$/g, "Sergey Karjakin")
        .replaceAll(/^Shakhryar Mamedyarov$/g, "Shakhriyar Mamedyarov")
        .replaceAll(/^Shakryar Mamedyarov$/g, "Shakhriyar Mamedyarov")
        .replaceAll(/^Simon K Williams$/g, "Simon Williams")
        .replaceAll(/^Samuel Shankland$/g, "Sam Shankland")
        .replaceAll(/^Sethuraman P Sethuraman$/g, "S.P. Sethuraman")
        .replaceAll(/^Sethuraman$/g, "S.P. Sethuraman")
        .replaceAll(/^Teimour$/g, "Teimour Radjabov")
        .replaceAll(/^So Wesley$/g, "Wesley So")
        .replaceAll(/^Vidit Gujrathi$/g, "Vidit Santosh Gujrathi")
        .replaceAll(/^Vidit Gujrathi Santosh$/g, "Vidit Santosh Gujrathi")
        .replaceAll(/^Santosh Gujrathi Vidit$/g, "Vidit Santosh Gujrathi")
        .replaceAll(/^Santosh Gurjathi Vidit$/g, "Vidit Santosh Gujrathi")
        .replaceAll(/^Keymer Vincent$/g, "Vincent Keymer")
        .replaceAll(/^Anand Tata Steel$/g, "Viswanathan Anand")
        .replaceAll(/^Vishvanathan Anand$/g, "Viswanathan Anand")
        .replaceAll(/^Vishwanathan Anand$/g, "Viswanathan Anand")
        .replaceAll(/^Yuri Averbakh$/g, "Yuri L Averbakh")
        .replaceAll(/^Quang Liem Le$/g, "Le Quang Liem")

    return _.trim(raw)
}
