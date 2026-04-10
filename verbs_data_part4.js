// 第三组 不规则动词 (30个)
const group3Verbs = [
    {
        infinitif: 'avoir',
        meaning: '有',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
            passe_compose: ['ai eu', 'as eu', 'a eu', 'avons eu', 'avez eu', 'ont eu'],
            imparfait: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
            futur_simple: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
            conditionnel: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'],
            subjonctif: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient']
        }
    },
    {
        infinitif: 'être',
        meaning: '是',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
            passe_compose: ['ai été', 'as été', 'a été', 'avons été', 'avez été', 'ont été'],
            imparfait: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'],
            futur_simple: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'],
            conditionnel: ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'],
            subjonctif: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient']
        }
    },
    {
        infinitif: 'aller',
        meaning: '去',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'],
            passe_compose: ['suis allé', 'es allé', 'est allé', 'sommes allés', 'êtes allés', 'sont allés'],
            imparfait: ['allais', 'allais', 'allait', 'allions', 'alliez', 'allaient'],
            futur_simple: ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'],
            conditionnel: ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'],
            subjonctif: ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent']
        }
    },
    {
        infinitif: 'faire',
        meaning: '做',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'],
            passe_compose: ['ai fait', 'as fait', 'a fait', 'avons fait', 'avez fait', 'ont fait'],
            imparfait: ['faisais', 'faisais', 'faisait', 'faisions', 'faisiez', 'faisaient'],
            futur_simple: ['ferai', 'feras', 'fera', 'ferons', 'ferez', 'feront'],
            conditionnel: ['ferais', 'ferais', 'ferait', 'ferions', 'feriez', 'feraient'],
            subjonctif: ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent']
        }
    },
    {
        infinitif: 'dire',
        meaning: '说',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'],
            passe_compose: ['ai dit', 'as dit', 'a dit', 'avons dit', 'avez dit', 'ont dit'],
            imparfait: ['disais', 'disais', 'disait', 'disions', 'disiez', 'disaient'],
            futur_simple: ['dirai', 'diras', 'dira', 'dirons', 'direz', 'diront'],
            conditionnel: ['dirais', 'dirais', 'dirait', 'dirions', 'diriez', 'diraient'],
            subjonctif: ['dise', 'dises', 'dise', 'disions', 'disiez', 'disent']
        }
    },
    {
        infinitif: 'prendre',
        meaning: '拿，吃',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'],
            passe_compose: ['ai pris', 'as pris', 'a pris', 'avons pris', 'avez pris', 'ont pris'],
            imparfait: ['prenais', 'prenais', 'prenait', 'prenions', 'preniez', 'prenaient'],
            futur_simple: ['prendrai', 'prendras', 'prendra', 'prendrons', 'prendrez', 'prendront'],
            conditionnel: ['prendrais', 'prendrais', 'prendrait', 'prendrions', 'prendriez', 'prendraient'],
            subjonctif: ['prenne', 'prennes', 'prenne', 'prenions', 'preniez', 'prennent']
        }
    },
    {
        infinitif: 'mettre',
        meaning: '放置',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'],
            passe_compose: ['ai mis', 'as mis', 'a mis', 'avons mis', 'avez mis', 'ont mis'],
            imparfait: ['mettais', 'mettais', 'mettait', 'mettions', 'mettiez', 'mettaient'],
            futur_simple: ['mettrai', 'mettras', 'mettra', 'mettrons', 'mettrez', 'mettront'],
            conditionnel: ['mettrais', 'mettrais', 'mettrait', 'mettrions', 'mettriez', 'mettraient'],
            subjonctif: ['mette', 'mettes', 'mette', 'mettions', 'mettiez', 'mettent']
        }
    },
    {
        infinitif: 'voir',
        meaning: '看见',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'],
            passe_compose: ['ai vu', 'as vu', 'a vu', 'avons vu', 'avez vu', 'ont vu'],
            imparfait: ['voyais', 'voyais', 'voyait', 'voyions', 'voyiez', 'voyaient'],
            futur_simple: ['verrai', 'verras', 'verra', 'verrons', 'verrez', 'verront'],
            conditionnel: ['verrais', 'verrais', 'verrait', 'verrions', 'verriez', 'verraient'],
            subjonctif: ['voie', 'voies', 'voie', 'voyions', 'voyiez', 'voient']
        }
    },
    {
        infinitif: 'savoir',
        meaning: '知道',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'],
            passe_compose: ['ai su', 'as su', 'a su', 'avons su', 'avez su', 'ont su'],
            imparfait: ['savais', 'savais', 'savait', 'savions', 'saviez', 'savaient'],
            futur_simple: ['saurai', 'sauras', 'saura', 'saurons', 'saurez', 'sauront'],
            conditionnel: ['saurais', 'saurais', 'saurait', 'saurions', 'sauriez', 'sauraient'],
            subjonctif: ['sache', 'saches', 'sache', 'sachions', 'sachiez', 'sachent']
        }
    },
    {
        infinitif: 'pouvoir',
        meaning: '能够',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'],
            passe_compose: ['ai pu', 'as pu', 'a pu', 'avons pu', 'avez pu', 'ont pu'],
            imparfait: ['pouvais', 'pouvais', 'pouvait', 'pouvions', 'pouviez', 'pouvaient'],
            futur_simple: ['pourrai', 'pourras', 'pourra', 'pourrons', 'pourrez', 'pourront'],
            conditionnel: ['pourrais', 'pourrais', 'pourrait', 'pourrions', 'pourriez', 'pourraient'],
            subjonctif: ['puisse', 'puisses', 'puisse', 'puissions', 'puissiez', 'puissent']
        }
    },
    {
        infinitif: 'devoir',
        meaning: '应该，必须',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'],
            passe_compose: ['ai dû', 'as dû', 'a dû', 'avons dû', 'avez dû', 'ont dû'],
            imparfait: ['devais', 'devais', 'devait', 'devions', 'deviez', 'devaient'],
            futur_simple: ['devrai', 'devras', 'devra', 'devrons', 'devrez', 'devront'],
            conditionnel: ['devrais', 'devrais', 'devrait', 'devrions', 'devriez', 'devraient'],
            subjonctif: ['doive', 'doives', 'doive', 'devions', 'deviez', 'doivent']
        }
    },
    {
        infinitif: 'vouloir',
        meaning: '想要',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'],
            passe_compose: ['ai voulu', 'as voulu', 'a voulu', 'avons voulu', 'avez voulu', 'ont voulu'],
            imparfait: ['voulais', 'voulais', 'voulait', 'voulions', 'vouliez', 'voulaient'],
            futur_simple: ['voudrai', 'voudras', 'voudra', 'voudrons', 'voudrez', 'voudront'],
            conditionnel: ['voudrais', 'voudrais', 'voudrait', 'voudrions', 'voudriez', 'voudraient'],
            subjonctif: ['veuille', 'veuilles', 'veuille', 'voulions', 'vouliez', 'veuillent']
        }
    },
    {
        infinitif: 'venir',
        meaning: '来',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'],
            passe_compose: ['suis venu', 'es venu', 'est venu', 'sommes venus', 'êtes venus', 'sont venus'],
            imparfait: ['venais', 'venais', 'venait', 'venions', 'veniez', 'venaient'],
            futur_simple: ['viendrai', 'viendras', 'viendra', 'viendrons', 'viendrez', 'viendront'],
            conditionnel: ['viendrais', 'viendrais', 'viendrait', 'viendrions', 'viendriez', 'viendraient'],
            subjonctif: ['vienne', 'viennes', 'vienne', 'venions', 'veniez', 'viennent']
        }
    },
    {
        infinitif: 'tenir',
        meaning: '拿着，保持',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['tiens', 'tiens', 'tient', 'tenons', 'tenez', 'tiennent'],
            passe_compose: ['ai tenu', 'as tenu', 'a tenu', 'avons tenu', 'avez tenu', 'ont tenu'],
            imparfait: ['tenais', 'tenais', 'tenait', 'tenions', 'teniez', 'tenaient'],
            futur_simple: ['tiendrai', 'tiendras', 'tiendra', 'tiendrons', 'tiendrez', 'tiendront'],
            conditionnel: ['tiendrais', 'tiendrais', 'tiendrait', 'tiendrions', 'tiendriez', 'tiendraient'],
            subjonctif: ['tienne', 'tiennes', 'tienne', 'tenions', 'teniez', 'tiennent']
        }
    },
    {
        infinitif: 'comprendre',
        meaning: '理解',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['comprends', 'comprends', 'comprend', 'comprenons', 'comprenez', 'comprennent'],
            passe_compose: ['ai compris', 'as compris', 'a compris', 'avons compris', 'avez compris', 'ont compris'],
            imparfait: ['comprenais', 'comprenais', 'comprenait', 'comprenions', 'compreniez', 'comprenaient'],
            futur_simple: ['comprendrai', 'comprendras', 'comprendra', 'comprendrons', 'comprendrez', 'comprendront'],
            conditionnel: ['comprendrais', 'comprendrais', 'comprendrait', 'comprendrions', 'comprendriez', 'comprendraient'],
            subjonctif: ['comprenne', 'comprennes', 'comprenne', 'comprenions', 'compreniez', 'comprennent']
        }
    },
    {
        infinitif: 'répondre',
        meaning: '回答',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['réponds', 'réponds', 'répond', 'répondons', 'répondez', 'répondent'],
            passe_compose: ['ai répondu', 'as répondu', 'a répondu', 'avons répondu', 'avez répondu', 'ont répondu'],
            imparfait: ['répondais', 'répondais', 'répondait', 'répondions', 'répondiez', 'répondaient'],
            futur_simple: ['répondrai', 'répondras', 'répondra', 'répondrons', 'répondrez', 'répondront'],
            conditionnel: ['répondrais', 'répondrais', 'répondrait', 'répondrions', 'répondriez', 'répondraient'],
            subjonctif: ['réponde', 'répondes', 'réponde', 'répondions', 'répondiez', 'répondent']
        }
    },
    {
        infinitif: 'écrire',
        meaning: '写',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['écris', 'écris', 'écrit', 'écrivons', 'écrivez', 'écrivent'],
            passe_compose: ['ai écrit', 'as écrit', 'a écrit', 'avons écrit', 'avez écrit', 'ont écrit'],
            imparfait: ['écrivais', 'écrivais', 'écrivait', 'écrivions', 'écriviez', 'écrivaient'],
            futur_simple: ['écrirai', 'écriras', 'écrira', 'écrirons', 'écrirez', 'écriront'],
            conditionnel: ['écrirais', 'écrirais', 'écrirait', 'écririons', 'écririez', 'écriraient'],
            subjonctif: ['écrive', 'écrives', 'écrive', 'écrivions', 'écriviez', 'écrivent']
        }
    },
    {
        infinitif: 'lire',
        meaning: '读',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['lis', 'lis', 'lit', 'lisons', 'lisez', 'lisent'],
            passe_compose: ['ai lu', 'as lu', 'a lu', 'avons lu', 'avez lu', 'ont lu'],
            imparfait: ['lisais', 'lisais', 'lisait', 'lisions', 'lisiez', 'lisaient'],
            futur_simple: ['lirai', 'liras', 'lira', 'lirons', 'lirez', 'liront'],
            conditionnel: ['lirais', 'lirais', 'lirait', 'lirions', 'liriez', 'liraient'],
            subjonctif: ['lise', 'lises', 'lise', 'lisions', 'lisiez', 'lisent']
        }
    },
    {
        infinitif: 'suivre',
        meaning: '跟随',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['suis', 'suis', 'suit', 'suivons', 'suivez', 'suivent'],
            passe_compose: ['ai suivi', 'as suivi', 'a suivi', 'avons suivi', 'avez suivi', 'ont suivi'],
            imparfait: ['suivais', 'suivais', 'suivait', 'suivions', 'suiviez', 'suivaient'],
            futur_simple: ['suivrai', 'suivras', 'suivra', 'suivrons', 'suivrez', 'suivront'],
            conditionnel: ['suivrais', 'suivrais', 'suivrait', 'suivrions', 'suivriez', 'suivraient'],
            subjonctif: ['suive', 'suives', 'suive', 'suivions', 'suiviez', 'suivent']
        }
    },
    {
        infinitif: 'vivre',
        meaning: '生活',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['vis', 'vis', 'vit', 'vivons', 'vivez', 'vivent'],
            passe_compose: ['ai vécu', 'as vécu', 'a vécu', 'avons vécu', 'avez vécu', 'ont vécu'],
            imparfait: ['vivais', 'vivais', 'vivait', 'vivions', 'viviez', 'vivaient'],
            futur_simple: ['vivrai', 'vivras', 'vivra', 'vivrons', 'vivrez', 'vivront'],
            conditionnel: ['vivrais', 'vivrais', 'vivrait', 'vivrions', 'vivriez', 'vivraient'],
            subjonctif: ['vive', 'vives', 'vive', 'vivions', 'viviez', 'vivent']
        }
    },
    {
        infinitif: 'naître',
        meaning: '出生',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['nais', 'nais', 'naît', 'naissons', 'naissez', 'naissent'],
            passe_compose: ['suis né', 'es né', 'est né', 'sommes nés', 'êtes nés', 'sont nés'],
            imparfait: ['naissais', 'naissais', 'naissait', 'naissions', 'naissiez', 'naissaient'],
            futur_simple: ['naîtrai', 'naîtras', 'naîtra', 'naîtrons', 'naîtrez', 'naîtront'],
            conditionnel: ['naîtrais', 'naîtrais', 'naîtrait', 'naîtrions', 'naîtriez', 'naîtraient'],
            subjonctif: ['naisse', 'naisses', 'naisse', 'naissions', 'naissiez', 'naissent']
        }
    },
    {
        infinitif: 'paraître',
        meaning: '显得，出现',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['parais', 'parais', 'paraît', 'paraissons', 'paraissez', 'paraissent'],
            passe_compose: ['ai paru', 'as paru', 'a paru', 'avons paru', 'avez paru', 'ont paru'],
            imparfait: ['paraissais', 'paraissais', 'paraissait', 'paraissions', 'paraissiez', 'paraissaient'],
            futur_simple: ['paraîtrai', 'paraîtras', 'paraîtra', 'paraîtrons', 'paraîtrez', 'paraîtront'],
            conditionnel: ['paraîtrais', 'paraîtrais', 'paraîtrait', 'paraîtrions', 'paraîtriez', 'paraîtraient'],
            subjonctif: ['paraisse', 'paraisses', 'paraisse', 'paraissions', 'paraissiez', 'paraissent']
        }
    },
    {
        infinitif: 'asseoir',
        meaning: '使坐下',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['assieds', 'assieds', 'assied', 'asseyons', 'asseyez', 'asseyent'],
            passe_compose: ['ai assis', 'as assis', 'a assis', 'avons assis', 'avez assis', 'ont assis'],
            imparfait: ['asseyais', 'asseyais', 'asseyait', 'asseyions', 'asseyiez', 'asseyaient'],
            futur_simple: ['assiérai', 'assiéras', 'assiéra', 'assiérons', 'assiérez', 'assiéront'],
            conditionnel: ['assiérais', 'assiérais', 'assiérait', 'assiérions', 'assiériez', 'assiéraient'],
            subjonctif: ['asseye', 'asseyes', 'asseye', 'asseyions', 'asseyiez', 'asseyent']
        }
    },
    {
        infinitif: 'conduire',
        meaning: '驾驶',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['conduis', 'conduis', 'conduit', 'conduisons', 'conduisez', 'conduisent'],
            passe_compose: ['ai conduit', 'as conduit', 'a conduit', 'avons conduit', 'avez conduit', 'ont conduit'],
            imparfait: ['conduisais', 'conduisais', 'conduisait', 'conduisions', 'conduisiez', 'conduisaient'],
            futur_simple: ['conduirai', 'conduiras', 'conduira', 'conduirons', 'conduirez', 'conduiront'],
            conditionnel: ['conduirais', 'conduirais', 'conduirait', 'conduirions', 'conduiriez', 'conduiraient'],
            subjonctif: ['conduise', 'conduises', 'conduise', 'conduisions', 'conduisiez', 'conduisent']
        }
    },
    {
        infinitif: 'construire',
        meaning: '建造',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['construis', 'construis', 'construit', 'construisons', 'construisez', 'construisent'],
            passe_compose: ['ai construit', 'as construit', 'a construit', 'avons construit', 'avez construit', 'ont construit'],
            imparfait: ['construisais', 'construisais', 'construisait', 'construisions', 'construisiez', 'construisaient'],
            futur_simple: ['construirai', 'construiras', 'construira', 'construirons', 'construirez', 'construiront'],
            conditionnel: ['construirais', 'construirais', 'construirait', 'construirions', 'construiriez', 'construiraient'],
            subjonctif: ['construise', 'construises', 'construise', 'construisions', 'construisiez', 'construisent']
        }
    },
    {
        infinitif: 'croire',
        meaning: '相信',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['crois', 'crois', 'croit', 'croyons', 'croyez', 'croient'],
            passe_compose: ['ai cru', 'as cru', 'a cru', 'avons cru', 'avez cru', 'ont cru'],
            imparfait: ['croyais', 'croyais', 'croyait', 'croyions', 'croyiez', 'croyaient'],
            futur_simple: ['croirai', 'croiras', 'croira', 'croirons', 'croirez', 'croiront'],
            conditionnel: ['croirais', 'croirais', 'croirait', 'croirions', 'croiriez', 'croiraient'],
            subjonctif: ['croie', 'croies', 'croie', 'croyions', 'croyiez', 'croient']
        }
    },
    {
        infinitif: 'sourire',
        meaning: '微笑',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['souris', 'souris', 'sourit', 'sourions', 'souriez', 'sourient'],
            passe_compose: ['ai souri', 'as souri', 'a souri', 'avons souri', 'avez souri', 'ont souri'],
            imparfait: ['souriais', 'souriais', 'souriait', 'sourions', 'souriez', 'souriaient'],
            futur_simple: ['sourirai', 'souriras', 'sourira', 'sourirons', 'sourirez', 'souriront'],
            conditionnel: ['sourirais', 'sourirais', 'sourirait', 'souririons', 'souririez', 'souriraient'],
            subjonctif: ['sourie', 'souries', 'sourie', 'sourions', 'souriez', 'sourient']
        }
    },
    {
        infinitif: 'traduire',
        meaning: '翻译',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['traduis', 'traduis', 'traduit', 'traduisons', 'traduisez', 'traduise'],
            passe_compose: ['ai traduit', 'as traduit', 'a traduit', 'avons traduit', 'avez traduit', 'ont traduit'],
            imparfait: ['traduisais', 'traduisais', 'traduisait', 'traduisions', 'traduisez', 'traduisaient'],
            futur_simple: ['traduirai', 'traduiras', 'traduira', 'traduirons', 'traduirez', 'traduiront'],
            conditionnel: ['traduirais', 'traduirais', 'traduirait', 'traduirions', 'traduiriez', 'traduiraient'],
            subjonctif: ['traduise', 'traduises', 'traduise', 'traduisions', 'traduisez', 'traduise']
        }
    },
    {
        infinitif: 'vaincre',
        meaning: '战胜',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['vaincs', 'vaincs', 'vainc', 'vainquons', 'vainquez', 'vainquent'],
            passe_compose: ['ai vaincu', 'as vaincu', 'a vaincu', 'avons vaincu', 'avez vaincu', 'ont vaincu'],
            imparfait: ['vainquais', 'vainquais', 'vainquait', 'vainquions', 'vainquiez', 'vainquaient'],
            futur_simple: ['vaincrai', 'vaincras', 'vaincra', 'vaincrons', 'vaincrez', 'vaincront'],
            conditionnel: ['vaincrais', 'vaincrais', 'vaincrait', 'vaincrions', 'vaincriez', 'vaincraient'],
            subjonctif: ['vainque', 'vainques', 'vainque', 'vainquions', 'vainquiez', 'vainquent']
        }
    },
    {
        infinitif: 'connaître',
        meaning: '认识',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['connais', 'connais', 'connaît', 'connaissons', 'connaissez', 'connaissent'],
            passe_compose: ['ai connu', 'as connu', 'a connu', 'avons connu', 'avez connu', 'ont connu'],
            imparfait: ['connaissais', 'connaissais', 'connaissait', 'connaissions', 'connaissiez', 'connaissaient'],
            futur_simple: ['connaîtrai', 'connaîtras', 'connaîtra', 'connaîtrons', 'connaîtrez', 'connaîtront'],
            conditionnel: ['connaîtrais', 'connaîtrais', 'connaîtrait', 'connaîtrions', 'connaîtriez', 'connaîtraient'],
            subjonctif: ['connaisse', 'connaisses', 'connaisse', 'connaissions', 'connaissiez', 'connaissent']
        }
    },
    {
        infinitif: 'fuir',
        meaning: '逃跑',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['fuis', 'fuis', 'fuit', 'fuyons', 'fuyez', 'fuient'],
            passe_compose: ['ai fui', 'as fui', 'a fui', 'avons fui', 'avez fui', 'ont fui'],
            imparfait: ['fuyais', 'fuyais', 'fuyait', 'fuyions', 'fuyiez', 'fuyaient'],
            futur_simple: ['fuirai', 'fuiras', 'fuira', 'fuirons', 'fuirez', 'fuiront'],
            conditionnel: ['fuirais', 'fuirais', 'fuirait', 'fuirions', 'fuiriez', 'fuiraient'],
            subjonctif: ['fuie', 'fuies', 'fuie', 'fuyions', 'fuyiez', 'fuient']
        }
    },
    {
        infinitif: 'partir',
        meaning: '离开',
        group: '第三组 (不规则)',
        conjugations: {
            present: ['pars', 'pars', 'part', 'partons', 'partez', 'partent'],
            passe_compose: ['suis parti', 'es parti', 'est parti', 'sommes partis', 'êtes partis', 'sont partis'],
            imparfait: ['partais', 'partais', 'partait', 'partions', 'partiez', 'partaient'],
            futur_simple: ['partirai', 'partiras', 'partira', 'partirons', 'partirez', 'partiront'],
            conditionnel: ['partirais', 'partirais', 'partirait', 'partirions', 'partiriez', 'partiraient'],
            subjonctif: ['parte', 'partes', 'parte', 'partions', 'partiez', 'partent']
        }
    }
];

export default group3Verbs;
