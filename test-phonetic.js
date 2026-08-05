function phoneticToRussian(phonetic) {
  let res = phonetic.toLowerCase();
  res = res.replace(/['ˈˌ()]/g, '');
  const map = {
    'a': 'а', 'æ': 'э', 'b': 'б', 'd': 'д', 'e': 'э', 'f': 'ф', 'g': 'г', 'h': 'х', 'i': 'и',
    'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п', 'r': 'р', 's': 'с',
    't': 'т', 'u': 'у', 'v': 'в', 'w': 'у', 'z': 'з', 'θ': 'с', 'ð': 'з', 'ʃ': 'ш',
    'ʒ': 'ж', 'ʧ': 'ч', 'ʤ': 'дж', 'ŋ': 'нг', 'j': 'й', 'ə': 'э', 'ɛ': 'э', 'ɪ': 'и', 'ʊ': 'у', 'ʌ': 'а',
    'ɔ': 'о', 'ɑ': 'а', 'ɒ': 'о', 'ɜ': 'ё', 'y': 'й', 'c': 'к'
  };
  let ru = '';
  for(let i=0; i<res.length; i++) {
     ru += map[res[i]] || res[i];
  }
  return ru;
}
console.log(phoneticToRussian("ˈap(ə)l")); // should be эпэл
console.log(phoneticToRussian("heˈlō")); // wait, google translate gives 'heˈlō' for hello
