let mainText = document.querySelector(".tahfizPage p");
let array = [
    `يومًا ما سنكُون كما نحلم إن الله لا يُخيّب ظن الصّابرِين`,
    `تخذلُنا الحياة ، ويُساندنا لُطف الله.`,
    `لا يزيد الامنيات جمالاً … إلا الصبر على تحقيقها`,
    `اقترب الحلم..تبقى القليل فقط لنصبر`,
    `اسعَ لنجاحكَ وحارب لأجله فهو لن يتحققَ من تلقاءِ ذاته`,
    `ونحنُ فِي دنيا الخيَال نُحاول التقاط بعضٍ مِن الحياة التي سرقها منا الواقع`,
    `يومًا ما سنلمسُ أحلامنا.. سنقطف حصادنا.. ونُهدي نجاحنا للعالم الذي نُحبّ.. يومًا ما سنصنع انفسنا.. ونُزهر من جديد`,
    `أهلاً بالصِّعاب ، ما دامَتِ النّهايات ستكونُ مُثمِرَة`,
    `“قاوم ؛ حتي لو وصلت ممزقّاً ، لذة الوصول سترمِّمُك.`,
    `نهَاية العتمة نُور؛ لذلِك كُن عبدًا صبُورً“`,
    ` الأوقات الصعبة تعلمنا دروس قيمة`,
    `لاتتوقف...فاللحظات الشاقة ستصبح ذكريات جميلة ترويها في قصة نجاحك`,
    `.سأڪون ما اريد، ولو بعد حين`,//:)
    `يوماً ما ستحقق أحلامك ، فقط استمر `,
    `انت عظيم ، رغم الصعوبات ورغم الانڪسارات التي حاولت ان تُسقطك ولم تفعل`,
    `افَعل المَزيد من أجلك ومن أجل فَرحك وسعادتك ،وأحَلامك`,
    `لن يأتي أحد و يطرق بابك ويمنحك مستقبلاً جميلاً أنت من يفعل ذلك `,
    `سأنجح.. سأحقق احلامي.. سأستثمر أيامي.. سأتحدى ذاتي.. سأقهر مخاوفي `,
    `" كل مُر سيمر ليأتيَ الله باليُسر الذي يَسُر "`,
    `رغم الصعوبات لكن نقاوم من اجل احلامنا`,
    `اخبروا احلامنا اننا لن نتوب عنها حتى نصلها `,
    `فلنبدأ من جديد وكأننا لم نفشل قط`,
    ` احلم بما شئت فَ الله ﻻيخذل من آمن به`,
    `ونحن للاحلام ولو طال بنا الانتظار`,
    `النجاح فى بعض الأحيان يكون نتيجة لسلسلة كاملة من الأخطاء`,
    `رُبما حلِم اليوم هَو واقع غدِ`,
    `لا شيء مُستحيل إذا توكلت على الله ،فلا تيأس مادامَ الله يعلمُ مافي قلبك`,
    `حلمك ليس له تاريخ انتهاء خذ نفس عميق وحاول مره اخرى`,
    `كن شيئاً يحارب الانطفاء،و سيلهمك الله نوراً إضافياً في كل مرة`,
    `حصادك قد يتأخر يتعثر  يُبهت ولكنه في النهاية سيأتي وهذا وعد حق بإذن الله `,
    `!في سقوطنا ألف علو وفي نهايتنا ألف بداية`,
    `رغم فشلنا المتڪرِّر إلا أنَّنا لن ولم نستسلم، سنقاتل حتى آخر جهد نستطيع المجازفة فيه`,
    `سيأتي اليوم الذي تدرك فيه أن أقسى ما مررت به كان خيرا عظيما أنقذك ليجعلك أقوى مما کنت عليه`,
    `اللهُم مستقبلًا أعظم ممّا حلمت وحياة ألطَف ممّا أردت اللهُم توفِيقًا ورضًا وحُبا وخيرًا `,
    `:) حارب لأجل أحلامك ، حتى ولو لم يحارب معك أحد `,
    `لا تستسلم مهما بَلغت عَقبات طريقكَ مِن الصعوبةه ، فَ الكثيرُ ممَّن فَشلوا لم يُدركوا مَدى قُربِهم مِن النجاحِ عندما استسلموا`,
];
mainText.textContent = array[12];

let rightArrow = document.querySelector(".tahfizPage .fa-angle-right");

mainText.textContent = rightArrow.addEventListener("click", (x) => {

    x = Math.floor(Math.random() * array.length);
    mainText.textContent = array[x];


    return array[x];
}) || array[12];



// Strart Full SCreen Nad Exit..
let FullScreenn = document.querySelector(".botomFullScreen");
let ExitFullScreenn = document.querySelector(".botomExitFullScreen");
let mune = document.querySelector(".ccvv");
let Pagetahfiz = document.querySelector(".tahfizPage");

let headerrr = document.querySelector("#header");

function getFullscreenElement() {
    return document.fullscreenElement
        ||
        document.webkitFullscreenElement
        ||
        document.mozFullscreenElement
        ||
        document.mszFullscreenElement
}

FullScreenn.addEventListener("click", () => {
    ExitFullScreenn.style.visibility = "visible";
    FullScreenn.style.visibility = " hidden";
    rightArrow.style.visibility = " hidden";
    copyBox.style.visibility = " hidden";
    headerrr.style.visibility = " hidden";
    document.documentElement.requestFullscreen().catch((e) => {

    });
});
ExitFullScreenn.addEventListener("click", () => {
    ExitFullScreenn.style.visibility = "hidden";
    FullScreenn.style.visibility = " visible ";
    rightArrow.style.visibility = " visible";
    copyBox.style.visibility = " visible";
    headerrr.style.visibility = " visible ";
    document.exitFullscreen().catch((e) => {

    });
});
// ENd Full SCreen Nad Exit..
let copyBox = document.querySelector(".tahfizPage .fa-copy")
//Start Copy


copyBox.addEventListener("click", () => {
    console.log(mainText.textContent);
    navigator.clipboard.writeText(mainText.textContent);
});


