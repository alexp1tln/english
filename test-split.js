const t1 = "Yes, one suitcase.";
const t2 = "I don't know.";
const clean = (text) => text.replace(/[.,!?]/g, '').split(/\s+/).filter(Boolean);
console.log(clean(t1));
console.log(clean(t2));
