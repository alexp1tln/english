function mapWord(w) {
    let rules = [
        [/yo͞o/g, 'ю'], [/yo͝o/g, 'ю'], [/yə/g, 'йэ'],
        [/o͞o/g, 'у'], [/o͝o/g, 'у'], [/t͟h/g, 'з'], [/th/g, 'с'],
        [/sh/g, 'ш'], [/ch/g, 'ч'], [/zh/g, 'ж'], [/ng/g, 'нг'],
        [/ā/g, 'эй'], [/ē/g, 'и'], [/ī/g, 'ай'], [/ō/g, 'оу'], [/ū/g, 'ю'],
        [/ä/g, 'а'], [/ô/g, 'о'],
        [/oi/g, 'ой'], [/ou/g, 'ау'], 
        [/ər/g, 'ер'],
        [/a/g, 'э'], [/e/g, 'э'], [/i/g, 'и'], [/o/g, 'о'], [/u/g, 'у'],
        [/ə/g, 'э'],
        [/b/g, 'б'], [/c/g, 'к'], [/d/g, 'д'], [/f/g, 'ф'], [/g/g, 'г'], [/ɡ/g, 'г'],
        [/h/g, 'х'], [/j/g, 'дж'], [/k/g, 'к'], [/l/g, 'л'], [/m/g, 'м'],
        [/n/g, 'н'], [/p/g, 'п'], [/q/g, 'кв'], [/r/g, 'р'], [/s/g, 'с'],
        [/t/g, 'т'], [/v/g, 'в'], [/w/g, 'в'], [/x/g, 'кс'], [/y/g, 'й'], [/z/g, 'з'],
        [/['ˈˌ()]/g, '']
    ];
    let res = w.toLowerCase();
    for (let [reg, repl] of rules) {
        res = res.replace(reg, repl);
    }
    return res;
}

const words = [
    'ˈap(ə)l', 'heˈlō', 'ˈbyo͞odəfəl', 'T͟Her', 'THôt', 'wo͝od', 'ˈdôdər', 'ˈnäləj', 'ˈlaNGɡwij',
    'kət', 'kat', 'dôɡ', 'po͝ot', 'sē', 'boi', 'hou', 'dā', 'əp', 'kəp', 'bo͝ok', 'out', 'kär', 'bərd', 'er', 'ir', 'to͝or'
];

words.forEach(w => console.log(w, '=>', mapWord(w)));
