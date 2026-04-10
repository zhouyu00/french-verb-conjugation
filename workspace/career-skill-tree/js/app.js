/* ============================
   Data: Timeline Stages
   ============================ */
const TIMELINE_DATA = [
  {
    id: 'junior',
    title: '初中前',
    subtitle: '12岁以前 · 启蒙阶段',
    icon: '🌱',
    dotClass: 'dot-junior',
    iconClass: 'icon-junior',
    events: [
      {
        name: 'NOIP 青少年信息学竞赛（普及组）',
        meta: [
          { label: '报名时间', value: '9-10月' },
          { label: '难度', value: '⭐⭐' },
        ],
        desc: '入门编程竞赛的最佳起点，考察基础算法与编程能力。建议从C++基础语法开始，掌握循环、条件、数组等，逐步学习排序、搜索等基础算法。',
        tags: [{ text: '入门推荐', type: 'easy' }, { text: '省赛选拔', type: 'info' }],
      },
      {
        name: 'NOIP 青少年信息学竞赛（提高组）',
        meta: [
          { label: '报名时间', value: '9-10月' },
          { label: '难度', value: '⭐⭐⭐' },
        ],
        desc: '普及组的进阶版，需要掌握动态规划、图论、搜索剪枝等中等难度算法。获奖可获得省队选拔资格，是升学加分的重要依据。',
        tags: [{ text: '升学加分', type: 'medium' }, { text: '省队选拔', type: 'info' }],
      },
      {
        name: 'Scratch/Python 编程启蒙',
        meta: [
          { label: '学习时间', value: '随时' },
          { label: '难度', value: '⭐' },
        ],
        desc: '通过图形化编程或Python培养计算思维，建议参加蓝桥杯青少年组、NCT等级考试等。重点培养逻辑思维和问题分解能力。',
        tags: [{ text: '零基础友好', type: 'easy' }],
      },
    ],
  },
  {
    id: 'senior',
    title: '高中',
    subtitle: '15-18岁 · 竞赛黄金期',
    icon: '🔥',
    dotClass: 'dot-senior',
    iconClass: 'icon-senior',
    events: [
      {
        name: 'NOIP 提高组 / NOI',
        meta: [
          { label: '报名时间', value: '9-10月' },
          { label: '难度', value: '⭐⭐⭐⭐' },
        ],
        desc: '高中阶段最重要的信息学竞赛。NOIP提高组一等奖可获得强基计划/综合评价加分；NOI金牌可获得保送资格。需要系统学习数据结构、DP、图论、数论等。',
        tags: [{ text: '保送资格', type: 'hard' }, { text: '强基计划', type: 'info' }],
      },
      {
        name: 'ACM-ICPC 邀请赛 / 外卡赛',
        meta: [
          { label: '报名时间', value: '3-5月' },
          { label: '难度', value: '⭐⭐⭐⭐' },
        ],
        desc: '高中生可参加的ACM系列赛事，体验团队竞赛模式。三人组队，5小时解决10-13题。锻炼团队协作和高压编程能力。',
        tags: [{ text: '团队赛', type: 'medium' }],
      },
      {
        name: '全国高中生程序设计竞赛',
        meta: [
          { label: '报名时间', value: '按通知' },
          { label: '难度', value: '⭐⭐⭐' },
        ],
        desc: '面向高中生的编程竞赛，题目难度适中，适合作为NOIP的热身赛。重视代码实现能力和基础算法的灵活运用。',
        tags: [{ text: '热身赛', type: 'easy' }],
      },
    ],
  },
  {
    id: 'college',
    title: '大学期间',
    subtitle: '18-22岁 · 全面发展阶段',
    icon: '🎓',
    dotClass: 'dot-college',
    iconClass: 'icon-college',
    events: [
      {
        name: 'ACM-ICPC 国际大学生程序设计竞赛',
        meta: [
          { label: '报名/校选', value: '9月' },
          { label: '难度', value: '⭐⭐⭐⭐⭐' },
        ],
        desc: '全球最具影响力的大学生编程竞赛。三人组队，5小时解决8-13题。区域赛金牌可进世界总决赛，是大厂校招最强背书。建议大一开始刷题，大二组队参赛。',
        tags: [{ text: '含金量最高', type: 'hard' }, { text: '校招加分', type: 'info' }],
      },
      {
        name: 'CCF-CSP 认证',
        meta: [
          { label: '考试时间', value: '3/9/12月' },
          { label: '难度', value: '⭐⭐⭐' },
        ],
        desc: 'CCF软件能力认证，分CSP-J（入门）和CSP-S（提高）。高校研究生推免和考研复试的重要参考。建议达到300分以上。',
        tags: [{ text: '考研加分', type: 'medium' }, { text: '推免参考', type: 'info' }],
      },
      {
        name: '数学建模竞赛（美赛/国赛）',
        meta: [
          { label: '美赛报名', value: '2月' },
          { label: '国赛报名', value: '9月' },
          { label: '难度', value: '⭐⭐⭐' },
        ],
        desc: '三人组队，72小时内完成建模论文。锻炼数学建模、编程实现和论文写作的综合能力。美赛M奖以上、国赛一等奖含金量高。',
        tags: [{ text: '综合能力', type: 'medium' }],
      },
      {
        name: '互联网+ / 挑战杯 / 创新创业大赛',
        meta: [
          { label: '校赛', value: '3-5月' },
          { label: '省赛', value: '6-8月' },
          { label: '难度', value: '⭐⭐⭐' },
        ],
        desc: '创新创业类竞赛，需要项目+商业计划书+路演。锻炼产品思维和表达能力。金奖/银奖对保研和求职有重要帮助。',
        tags: [{ text: '保研加分', type: 'medium' }, { text: '创业方向', type: 'info' }],
      },
    ],
  },
  {
    id: 'master',
    title: '研究生',
    subtitle: '22-25岁 · 深耕与突破',
    icon: '🔬',
    dotClass: 'dot-master',
    iconClass: 'icon-master',
    events: [
      {
        name: '顶会论文发表',
        meta: [
          { label: '投递周期', value: '3-6个月' },
          { label: '难度', value: '⭐⭐⭐⭐⭐' },
        ],
        desc: '计算机领域顶会如CVPR、NeurIPS、ICML、KDD、SOSP、OSDI等。一篇顶会论文是学术能力最强证明，也是大厂算法岗/研究岗的敲门砖。',
        tags: [{ text: '学术最高', type: 'hard' }, { text: '算法岗必备', type: 'info' }],
      },
      {
        name: '大厂实习（暑期/日常）',
        meta: [
          { label: '暑期实习', value: '3-5月投递' },
          { label: '日常实习', value: '全年' },
          { label: '难度', value: '⭐⭐⭐⭐' },
        ],
        desc: 'BAT/字节/美团等大厂实习经历是秋招最强加分项。研一暑期实习含金量最高，争取return offer可提前锁定秋招名额。',
        tags: [{ text: '秋招关键', type: 'medium' }, { text: 'return offer', type: 'info' }],
      },
      {
        name: '开源贡献（GitHub）',
        meta: [
          { label: '时间', value: '持续进行' },
          { label: '难度', value: '⭐⭐⭐' },
        ],
        desc: '参与知名开源项目贡献代码，建立技术影响力。高质量PR和长期维护的项目比竞赛更能体现工程能力。关注Apache、CNCF等基金会项目。',
        tags: [{ text: '工程能力', type: 'easy' }, { text: '技术影响力', type: 'info' }],
      },
    ],
  },
  {
    id: 'career',
    title: '职场',
    subtitle: '25岁+ · 职业发展',
    icon: '💼',
    dotClass: 'dot-career',
    iconClass: 'icon-career',
    events: [
      {
        name: '秋招 / 春招',
        meta: [
          { label: '秋招', value: '8-11月' },
          { label: '春招', value: '2-4月' },
          { label: '难度', value: '⭐⭐⭐⭐' },
        ],
        desc: '校招是进入大厂的最佳窗口。秋招提前批7月即开始，正式批8-9月集中面试。准备要点：算法题400+、系统设计、项目深挖、行为面试。',
        tags: [{ text: '校招窗口', type: 'hard' }, { text: '提前批重要', type: 'info' }],
      },
      {
        name: '大厂 Offer 选择',
        meta: [
          { label: '决策期', value: '10-11月' },
          { label: '难度', value: '⭐⭐⭐⭐' },
        ],
        desc: '拿到多个Offer后的选择策略：考虑技术成长空间 > 团队氛围 > 薪资包 > 公司品牌。警惕签三方后的违约金问题，利用offer谈判提升待遇。',
        tags: [{ text: '职业起点', type: 'medium' }],
      },
      {
        name: '技术成长路径',
        meta: [
          { label: '时间', value: '持续' },
          { label: '关键节点', value: '1/3/5/8年' },
        ],
        desc: '典型路径：初级工程师→中级→高级→技术专家/架构师→技术总监。1年站稳脚跟，3年成为骨干，5年带团队或成为专家，8年+考虑技术管理或创业。',
        tags: [{ text: '长期规划', type: 'info' }],
      },
    ],
  },
];

/* ============================
   Data: Skill Categories & Items
   ============================ */
const SKILL_CATEGORIES = [
  {
    id: 'languages',
    name: '编程语言',
    icon: '⚡',
    skills: [
      { id: 'python', name: 'Python', defaultLevel: 3 },
      { id: 'cpp', name: 'C/C++', defaultLevel: 2 },
      { id: 'java', name: 'Java', defaultLevel: 2 },
      { id: 'go', name: 'Go', defaultLevel: 1 },
      { id: 'rust', name: 'Rust', defaultLevel: 0 },
      { id: 'typescript', name: 'TypeScript', defaultLevel: 2 },
      { id: 'javascript', name: 'JavaScript', defaultLevel: 2 },
      { id: 'csharp', name: 'C#', defaultLevel: 0 },
    ],
  },
  {
    id: 'algo',
    name: '数据结构与算法',
    icon: '🧮',
    skills: [
      { id: 'datastructure', name: '基础数据结构', defaultLevel: 3 },
      { id: 'dp', name: '动态规划', defaultLevel: 2 },
      { id: 'graph', name: '图论算法', defaultLevel: 2 },
      { id: 'search', name: '搜索与回溯', defaultLevel: 3 },
      { id: 'greedy', name: '贪心策略', defaultLevel: 2 },
      { id: 'string', name: '字符串算法', defaultLevel: 2 },
      { id: 'math', name: '数论与组合', defaultLevel: 1 },
    ],
  },
  {
    id: 'system',
    name: '系统设计',
    icon: '🏗️',
    skills: [
      { id: 'sysdesign', name: '分布式系统设计', defaultLevel: 1 },
      { id: 'microservice', name: '微服务架构', defaultLevel: 1 },
      { id: 'msgqueue', name: '消息队列', defaultLevel: 1 },
      { id: 'caching', name: '缓存策略', defaultLevel: 2 },
      { id: 'loadbalance', name: '负载均衡', defaultLevel: 1 },
      { id: 'highavailable', name: '高可用设计', defaultLevel: 1 },
    ],
  },
  {
    id: 'frontend',
    name: '前端技术',
    icon: '🎨',
    skills: [
      { id: 'react', name: 'React', defaultLevel: 2 },
      { id: 'vue', name: 'Vue', defaultLevel: 2 },
      { id: 'htmlcss', name: 'HTML/CSS', defaultLevel: 3 },
      { id: 'nodejs', name: 'Node.js', defaultLevel: 2 },
      { id: 'webpack', name: '构建工具', defaultLevel: 1 },
      { id: 'mobile', name: '移动端/小程序', defaultLevel: 1 },
    ],
  },
  {
    id: 'backend',
    name: '后端技术',
    icon: '⚙️',
    skills: [
      { id: 'spring', name: 'Spring 生态', defaultLevel: 2 },
      { id: 'django', name: 'Django/Flask', defaultLevel: 2 },
      { id: 'gin', name: 'Gin/Go框架', defaultLevel: 1 },
      { id: 'rpc', name: 'RPC 框架', defaultLevel: 1 },
      { id: 'restapi', name: 'RESTful API', defaultLevel: 3 },
      { id: 'graphql', name: 'GraphQL', defaultLevel: 0 },
    ],
  },
  {
    id: 'database',
    name: '数据库',
    icon: '💾',
    skills: [
      { id: 'mysql', name: 'MySQL', defaultLevel: 2 },
      { id: 'redis', name: 'Redis', defaultLevel: 2 },
      { id: 'mongodb', name: 'MongoDB', defaultLevel: 1 },
      { id: 'postgresql', name: 'PostgreSQL', defaultLevel: 1 },
      { id: 'elasticsearch', name: 'Elasticsearch', defaultLevel: 1 },
      { id: 'clickhouse', name: 'ClickHouse', defaultLevel: 0 },
    ],
  },
  {
    id: 'devops',
    name: '运维部署',
    icon: '🚀',
    skills: [
      { id: 'docker', name: 'Docker', defaultLevel: 2 },
      { id: 'k8s', name: 'Kubernetes', defaultLevel: 1 },
      { id: 'cicd', name: 'CI/CD', defaultLevel: 1 },
      { id: 'linux', name: 'Linux', defaultLevel: 2 },
      { id: 'monitor', name: '监控/日志', defaultLevel: 1 },
      { id: 'cloud', name: '云服务(AWS/阿里云)', defaultLevel: 1 },
    ],
  },
  {
    id: 'softskills',
    name: '软技能',
    icon: '🤝',
    skills: [
      { id: 'communication', name: '沟通表达', defaultLevel: 2 },
      { id: 'teamwork', name: '团队协作', defaultLevel: 3 },
      { id: 'timemanage', name: '时间管理', defaultLevel: 2 },
      { id: 'problemsolve', name: '问题解决', defaultLevel: 3 },
      { id: 'english', name: '英语能力', defaultLevel: 2 },
      { id: 'presentation', name: '技术分享', defaultLevel: 1 },
    ],
  },
];

/* ============================
   Data: Career Directions
   ============================ */
const CAREER_DIRECTIONS = [
  {
    id: 'backend',
    name: '后端开发',
    desc: '服务端架构设计与开发，高并发系统建设',
    weights: { languages: 0.25, algo: 0.15, system: 0.2, backend: 0.2, database: 0.1, devops: 0.05, frontend: 0, softskills: 0.05 },
    baseSalary: '25-60K',
    seniorSalary: '50-100K+',
    marketDemand: '高',
  },
  {
    id: 'algo',
    name: '算法工程师',
    desc: '机器学习/AI算法研究与落地，推荐/搜索/NLP/CV方向',
    weights: { languages: 0.1, algo: 0.3, system: 0.1, backend: 0.1, database: 0.05, devops: 0, frontend: 0, softskills: 0.05 },
    baseSalary: '30-70K',
    seniorSalary: '60-150K+',
    marketDemand: '高（需顶会论文）',
  },
  {
    id: 'frontend',
    name: '前端开发',
    desc: 'Web/移动端交互开发，用户体验与性能优化',
    weights: { languages: 0.15, algo: 0.1, system: 0.05, backend: 0.05, database: 0.05, devops: 0, frontend: 0.45, softskills: 0.05 },
    baseSalary: '20-45K',
    seniorSalary: '40-80K',
    marketDemand: '中高',
  },
  {
    id: 'infra',
    name: '基础架构/运维',
    desc: '分布式系统基础设施，云原生与DevOps',
    weights: { languages: 0.15, algo: 0.1, system: 0.2, backend: 0.1, database: 0.05, devops: 0.3, frontend: 0, softskills: 0.05 },
    baseSalary: '25-55K',
    seniorSalary: '50-100K',
    marketDemand: '中高',
  },
  {
    id: 'embedded',
    name: '嵌入式/物联网',
    desc: '硬件驱动开发，实时系统与底层优化',
    weights: { languages: 0.3, algo: 0.2, system: 0.15, backend: 0, database: 0, devops: 0.05, frontend: 0, softskills: 0.05 },
    baseSalary: '18-40K',
    seniorSalary: '35-70K',
    marketDemand: '中',
  },
  {
    id: 'autonomous',
    name: '自动驾驶/机器人',
    desc: '感知/规划/控制算法，多传感器融合',
    weights: { languages: 0.15, algo: 0.3, system: 0.15, backend: 0, database: 0, devops: 0.05, frontend: 0, softskills: 0.05 },
    baseSalary: '30-60K',
    seniorSalary: '55-120K+',
    marketDemand: '高（门槛高）',
  },
  {
    id: 'gamedev',
    name: '游戏开发',
    desc: '游戏引擎/图形渲染/游戏逻辑开发',
    weights: { languages: 0.25, algo: 0.2, system: 0.1, backend: 0.05, database: 0, devops: 0, frontend: 0.2, softskills: 0.05 },
    baseSalary: '18-45K',
    seniorSalary: '35-80K',
    marketDemand: '中',
  },
  {
    id: 'data',
    name: '数据工程/分析',
    desc: '数据仓库建设、ETL、数据建模与分析',
    weights: { languages: 0.15, algo: 0.1, system: 0.1, backend: 0.15, database: 0.25, devops: 0.1, frontend: 0, softskills: 0.05 },
    baseSalary: '22-50K',
    seniorSalary: '40-90K',
    marketDemand: '中高',
  },
];

/* ============================
   Data: Learning Paths
   ============================ */
const LEARNING_PATHS = {
  backend: [
    { name: '夯实语言基础', desc: '深入掌握Java/Go一门主力语言，理解JVM/GC机制或Go并发模型', time: '1-2个月' },
    { name: '数据库进阶', desc: 'MySQL索引优化、事务隔离级别、分库分表；Redis缓存策略、持久化', time: '2-3周' },
    { name: '中间件学习', desc: '消息队列(RocketMQ/Kafka)、RPC框架(Dubbo/gRPC)、配置中心', time: '2-3周' },
    { name: '系统设计实战', desc: '设计秒杀系统、短链系统、feed流系统，掌握高并发设计模式', time: '3-4周' },
    { name: '微服务与云原生', desc: 'Spring Cloud/Go-Micro、Docker/K8s、服务网格、可观测性', time: '3-4周' },
    { name: '项目实战与面试', desc: '完成2-3个高质量项目，刷系统设计题，准备行为面试', time: '持续' },
  ],
  algo: [
    { name: '数学基础补强', desc: '线性代数、概率统计、微积分、最优化方法', time: '1-2个月' },
    { name: '机器学习入门', desc: '吴恩达课程+西瓜书，掌握经典算法：LR、SVM、树模型、XGBoost', time: '2-3个月' },
    { name: '深度学习框架', desc: 'PyTorch为核心，CNN/RNN/Transformer架构原理与实现', time: '2-3个月' },
    { name: '方向深入', desc: '选择CV/NLP/推荐/搜索之一深耕，复现经典论文', time: '3-6个月' },
    { name: '论文与开源', desc: '尝试改进现有方法，投稿顶会；贡献开源框架', time: '持续' },
    { name: '实习与落地', desc: '争取大厂算法实习，积累实际业务场景经验', time: '3-6个月' },
  ],
  frontend: [
    { name: 'JavaScript深入', desc: '闭包/原型链/异步/Event Loop，ES6+新特性', time: '1-2个月' },
    { name: '框架精通', desc: 'React/Vue核心原理，组件设计模式，状态管理', time: '2-3个月' },
    { name: '工程化体系', desc: 'Webpack/Vite构建、CI/CD、Monorepo、微前端', time: '2-3周' },
    { name: '性能优化', desc: '首屏优化、代码分割、虚拟列表、SSR/SSG、性能监控', time: '2-3周' },
    { name: '跨端与可视化', desc: 'React Native/小程序、Three.js/ECharts/D3', time: '3-4周' },
    { name: '项目与面试', desc: '打造个人项目/开源贡献，准备框架原理与手写题', time: '持续' },
  ],
  default: [
    { name: '评估现状', desc: '梳理当前技能水平，明确优势与短板', time: '1周' },
    { name: '补齐基础', desc: '加强算法与数据结构，提升编程语言熟练度', time: '1-2个月' },
    { name: '方向选择', desc: '根据兴趣与市场需求，确定1-2个深耕方向', time: '1-2周' },
    { name: '项目实战', desc: '围绕选定方向，完成2-3个有深度的项目', time: '2-3个月' },
    { name: '面试准备', desc: '刷题+系统设计+项目深挖+行为面试', time: '1-2个月' },
  ],
};

/* ============================
   SVG Icon Components
   ============================ */
function IconTimeline() {
  return React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
    React.createElement('polyline', { points: '12 6 12 12 16 14' })
  );
}

function IconSkills() {
  return React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('path', { d: 'M12 20V10' }),
    React.createElement('path', { d: 'M18 20V4' }),
    React.createElement('path', { d: 'M6 20v-4' })
  );
}

function IconAnalysis() {
  return React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('path', { d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' }),
    React.createElement('polyline', { points: '3.27 6.96 12 12.01 20.73 6.96' }),
    React.createElement('line', { x1: 12, y1: 22.08, x2: 12, y2: 12' })
  );
}

function IconChevronDown() {
  return React.createElement('svg', { className: 'stage-expand-icon', width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('polyline', { points: '6 9 12 15 18 9' })
  );
}

function IconCalendar() {
  return React.createElement('svg', { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('rect', { x: 3, y: 4, width: 18, height: 18, rx: 2, ry: 2 }),
    React.createElement('line', { x1: 16, y1: 2, x2: 16, y2: 6 }),
    React.createElement('line', { x1: 8, y1: 2, x2: 8, y2: 6 }),
    React.createElement('line', { x1: 3, y1: 10, x2: 21, y2: 10 })
  );
}

function IconStar() {
  return React.createElement('svg', { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' })
  );
}

function IconAlertTriangle() {
  return React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('path', { d: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' }),
    React.createElement('line', { x1: 12, y1: 9, x2: 12, y2: 13' }),
    React.createElement('line', { x1: 12, y1: 17, x2: 12.01, y2: 17' })
  );
}

function IconLightbulb() {
  return React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('path', { d: 'M9 18h6' }),
    React.createElement('path', { d: 'M10 22h4' }),
    React.createElement('path', { d: 'M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14' })
  );
}

function IconTarget() {
  return React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
    React.createElement('circle', { cx: 12, cy: 12, r: 6' }),
    React.createElement('circle', { cx: 12, cy: 12, r: 2 })
  );
}

function IconBookOpen() {
  return React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
    React.createElement('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' })
  );
}

function IconZap() {
  return React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
  );
}

/* ============================
   Helper: localStorage
   ============================ */
const STORAGE_KEY = 'career-planner-skills';

function loadSkills() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) return JSON.parse(data);
  } catch (e) { /* ignore */ }
  return null;
}

function saveSkills(skills) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
  } catch (e) { /* ignore */ }
}

function initSkillLevels() {
  const saved = loadSkills();
  const levels = {};
  SKILL_CATEGORIES.forEach(cat => {
    cat.skills.forEach(skill => {
      levels[skill.id] = saved && saved[skill.id] !== undefined ? saved[skill.id] : skill.defaultLevel;
    });
  });
  return levels;
}

/* ============================
   Helper: Calculate Category Avg
   ============================ */
function getCategoryAvg(catId, levels) {
  const cat = SKILL_CATEGORIES.find(c => c.id === catId);
  if (!cat) return 0;
  const sum = cat.skills.reduce((acc, s) => acc + (levels[s.id] || 0), 0);
  return sum / cat.skills.length;
}

/* ============================
   Helper: Estimate Salary
   ============================ */
function estimateSalary(levels) {
  const avgs = {};
  SKILL_CATEGORIES.forEach(cat => {
    avgs[cat.id] = getCategoryAvg(cat.id, levels);
  });
  const totalAvg = Object.values(avgs).reduce((a, b) => a + b, 0) / Object.keys(avgs).length;
  const techAvg = ['languages', 'algo', 'system', 'backend', 'database', 'frontend', 'devops']
    .reduce((acc, id) => acc + (avgs[id] || 0), 0) / 7;

  const base = Math.round(12 + techAvg * 8 + totalAvg * 3);
  const high = Math.round(base * 1.6);
  return { low: base, high: high, range: `${base}-${high}K` };
}

/* ============================
   Helper: Competition Position
   ============================ */
function getCompetitionPosition(levels) {
  const salary = estimateSalary(levels);
  const avg = (salary.low + salary.high) / 2;
  if (avg >= 35) return { level: '领先', color: '#10b981', desc: '你的综合技能处于市场前列' };
  if (avg >= 25) return { level: '中上', color: '#06b6d4', desc: '技能水平良好，继续深耕可突破' };
  if (avg >= 18) return { level: '中等', color: '#f59e0b', desc: '有一定基础，需要系统提升' };
  return { level: '起步', color: '#f43f5e', desc: '处于学习初期，建议先打好基础' };
}

/* ============================
   Helper: Calculate Direction Potential
   ============================ */
function calcDirectionPotential(direction, levels) {
  let score = 0;
  let totalWeight = 0;
  const w = direction.weights;
  Object.keys(w).forEach(catId => {
    if (w[catId] > 0) {
      const avg = getCategoryAvg(catId, levels);
      score += avg * w[catId];
      totalWeight += w[catId];
    }
  });
  if (totalWeight === 0) return 0;
  const rawScore = (score / totalWeight) * 20;
  return Math.min(100, Math.round(rawScore));
}

/* ============================
   Component: TimelinePage
   ============================ */
function TimelinePage() {
  const [expandedStages, setExpandedStages] = React.useState({ junior: true });

  const toggleStage = (id) => {
    setExpandedStages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return React.createElement('div', { className: 'timeline-page' },
    React.createElement('div', { className: 'timeline-hero' },
      React.createElement('h2', null, '职业发展时间轴'),
      React.createElement('p', null, '从编程启蒙到职场进阶，每个阶段都有关键机遇')
    ),
    React.createElement('div', { className: 'timeline-container' },
      React.createElement('div', { className: 'timeline-line' }),
      TIMELINE_DATA.map(stage =>
        React.createElement('div', {
          key: stage.id,
          className: `timeline-stage ${expandedStages[stage.id] ? 'expanded' : ''}`
        },
          React.createElement('div', { className: `timeline-dot ${stage.dotClass}` }),
          React.createElement('div', {
            className: 'stage-card',
            onClick: () => toggleStage(stage.id)
          },
            React.createElement('div', { className: 'stage-header' },
              React.createElement('div', { className: 'stage-header-left' },
                React.createElement('div', { className: `stage-icon ${stage.iconClass}` }, stage.icon),
                React.createElement('div', null,
                  React.createElement('div', { className: 'stage-title' }, stage.title),
                  React.createElement('div', { className: 'stage-subtitle' }, stage.subtitle)
                )
              ),
              React.createElement(IconChevronDown)
            ),
            React.createElement('div', { className: 'stage-body' },
              React.createElement('div', { className: 'stage-body-inner' },
                stage.events.map((event, idx) =>
                  React.createElement('div', { key: idx, className: 'event-item' },
                    React.createElement('div', { className: 'event-bullet' }),
                    React.createElement('div', { className: 'event-content' },
                      React.createElement('div', { className: 'event-name' }, event.name),
                      React.createElement('div', { className: 'event-meta' },
                        event.meta.map((m, mi) =>
                          React.createElement('span', { key: mi, className: 'event-meta-item' },
                            m.label === '报名时间' || m.label === '考试时间' || m.label === '报名/校选'
                              ? React.createElement(IconCalendar)
                              : React.createElement(IconStar),
                            ' ',
                            m.label, ': ', m.value
                          )
                        )
                      ),
                      React.createElement('div', { className: 'event-desc' }, event.desc),
                      React.createElement('div', null,
                        event.tags.map((tag, ti) =>
                          React.createElement('span', { key: ti, className: `event-tag tag-${tag.type}` }, tag.text)
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

/* ============================
   Component: SkillsPage
   ============================ */
function SkillsPage() {
  const [skillLevels, setSkillLevels] = React.useState(initSkillLevels);
  const [activeCategory, setActiveCategory] = React.useState('languages');
  const radarChartRef = React.useRef(null);
  const chartInstanceRef = React.useRef(null);

  const handleLevelChange = (skillId, level) => {
    const newLevels = { ...skillLevels, [skillId]: parseInt(level) };
    setSkillLevels(newLevels);
    saveSkills(newLevels);
  };

  const getLevelLabel = (level) => {
    const labels = ['未接触', '入门', '基础', '熟练', '精通', '专家'];
    return labels[level] || '未接触';
  };

  // Radar chart
  React.useEffect(() => {
    if (!radarChartRef.current) return;

    const ctx = radarChartRef.current.getContext('2d');
    const labels = SKILL_CATEGORIES.map(c => c.name);
    const data = SKILL_CATEGORIES.map(c => getCategoryAvg(c.id, skillLevels));

    if (chartInstanceRef.current) {
      chartInstanceRef.current.data.datasets[0].data = data;
      chartInstanceRef.current.update();
      return;
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: '能力值',
          data: data,
          backgroundColor: 'rgba(6, 182, 212, 0.15)',
          borderColor: 'rgba(6, 182, 212, 0.8)',
          borderWidth: 2,
          pointBackgroundColor: '#06b6d4',
          pointBorderColor: '#06b6d4',
          pointRadius: 4,
          pointHoverRadius: 6,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 5,
            ticks: {
              stepSize: 1,
              color: '#64748b',
              backdropColor: 'transparent',
              font: { size: 10 },
            },
            grid: {
              color: 'rgba(42, 58, 80, 0.5)',
            },
            angleLines: {
              color: 'rgba(42, 58, 80, 0.5)',
            },
            pointLabels: {
              color: '#94a3b8',
              font: { size: 11, weight: '500' },
            },
          },
        },
      },
    });
  }, [skillLevels]);

  const salary = estimateSalary(skillLevels);
  const competition = getCompetitionPosition(skillLevels);
  const totalSkills = SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0);
  const masteredSkills = SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.filter(s => skillLevels[s.id] >= 3).length, 0);

  const activeCat = SKILL_CATEGORIES.find(c => c.id === activeCategory);

  return React.createElement('div', { className: 'skills-page' },
    React.createElement('div', { className: 'skills-layout' },
      // Sidebar
      React.createElement('div', { className: 'skills-sidebar' },
        SKILL_CATEGORIES.map(cat =>
          React.createElement('button', {
            key: cat.id,
            className: `skill-cat-btn ${activeCategory === cat.id ? 'active' : ''}`,
            onClick: () => setActiveCategory(cat.id),
          },
            React.createElement('span', { className: 'skill-cat-icon' }, cat.icon),
            React.createElement('span', null, cat.name),
            React.createElement('span', { className: 'skill-cat-count' }, cat.skills.length)
          )
        )
      ),
      // Main content
      React.createElement('div', { className: 'skills-main' },
        // Active category skills
        activeCat && React.createElement('div', { className: 'skill-group' },
          React.createElement('div', { className: 'skill-group-title' },
            activeCat.icon, ' ', activeCat.name
          ),
          activeCat.skills.map(skill =>
            React.createElement('div', { key: skill.id, className: 'skill-card' },
              React.createElement('div', { className: 'skill-card-header' },
                React.createElement('span', { className: 'skill-name' }, skill.name),
                React.createElement('span', { className: `skill-level-badge level-${skillLevels[skill.id] || 0}` },
                  getLevelLabel(skillLevels[skill.id] || 0)
                )
              ),
              React.createElement('div', { className: 'skill-slider-container' },
                React.createElement('input', {
                  type: 'range',
                  className: 'skill-slider',
                  min: 0,
                  max: 5,
                  value: skillLevels[skill.id] || 0,
                  onChange: (e) => handleLevelChange(skill.id, e.target.value),
                })
              ),
              React.createElement('div', { className: 'skill-slider-labels' },
                Array.from({ length: 6 }, (_, i) =>
                  React.createElement('span', { key: i }, i)
                )
              )
            )
          )
        ),
        // Summary panel
        React.createElement('div', { className: 'summary-panel' },
          React.createElement('div', { className: 'summary-title' },
            React.createElement(IconTarget),
            ' 综合评估'
          ),
          React.createElement('div', { className: 'summary-grid' },
            React.createElement('div', { className: 'radar-chart-container' },
              React.createElement('canvas', { ref: radarChartRef })
            ),
            React.createElement('div', { className: 'summary-stats' },
              React.createElement('div', { className: 'stat-card' },
                React.createElement('div', { className: 'stat-label' }, '预计薪资区间'),
                React.createElement('div', { className: 'stat-value' }, salary.range),
                React.createElement('div', { className: 'stat-sub' }, '月薪·一线城市'),
                React.createElement('div', { className: 'salary-bar' },
                  React.createElement('div', {
                    className: 'salary-bar-fill',
                    style: { width: `${Math.min(100, (salary.low / 50) * 100)}%` }
                  })
                )
              ),
              React.createElement('div', { className: 'stat-card' },
                React.createElement('div', { className: 'stat-label' }, '市场竞争位置'),
                React.createElement('div', { className: 'competition-indicator' },
                  React.createElement('div', { className: 'competition-dot', style: { background: competition.color } }),
                  React.createElement('span', { className: 'stat-value', style: { color: competition.color } }, competition.level)
                ),
                React.createElement('div', { className: 'stat-sub' }, competition.desc)
              ),
              React.createElement('div', { className: 'stat-card' },
                React.createElement('div', { className: 'stat-label' }, '技能掌握度'),
                React.createElement('div', { className: 'stat-value' }, `${masteredSkills} / ${totalSkills}`),
                React.createElement('div', { className: 'stat-sub' }, '已熟练掌握的技能数量')
              )
            )
          )
        )
      )
    )
  );
}

/* ============================
   Component: AnalysisPage
   ============================ */
function AnalysisPage() {
  const [currentStage, setCurrentStage] = React.useState('college');
  const [showResults, setShowResults] = React.useState(false);
  const [skillLevels] = React.useState(() => initSkillLevels());

  const stages = [
    { id: 'junior', label: '初中' },
    { id: 'senior', label: '高中' },
    { id: 'college', label: '大学' },
    { id: 'master', label: '研究生' },
    { id: 'career', label: '职场新人' },
    { id: 'senior_dev', label: '资深开发' },
  ];

  const handleAnalyze = () => {
    setShowResults(true);
  };

  const directions = CAREER_DIRECTIONS.map(dir => ({
    ...dir,
    potential: calcDirectionPotential(dir, skillLevels),
  })).sort((a, b) => b.potential - a.potential);

  const topDirection = directions[0];
  const learningPath = LEARNING_PATHS[topDirection.id] || LEARNING_PATHS.default;

  const getScoreClass = (score) => {
    if (score >= 75) return 'excellent';
    if (score >= 55) return 'good';
    if (score >= 35) return 'medium';
    return 'warning';
  };

  const getCardClass = (score) => {
    if (score >= 75) return 'card-excellent';
    if (score >= 55) return 'card-good';
    if (score >= 35) return 'card-medium';
    return 'card-warning';
  };

  const getWarningText = (dir) => {
    if (dir.potential < 35) {
      const tips = {
        algo: '算法岗竞争激烈，通常需要顶会论文或ACM金牌。建议先积累项目经验，考虑先入行后端再转算法。',
        embedded: '嵌入式岗位相对较少，薪资天花板低于互联网。建议同时掌握后端技能作为保底，或聚焦汽车电子/芯片等高增长领域。',
        gamedev: '国内游戏行业受政策影响大，加班严重。建议掌握通用后端技能，将游戏开发作为兴趣方向。',
        autonomous: '自动驾驶门槛极高，需要博士学历+顶会论文。建议先进入相关公司的基础架构岗，再内部转岗。',
      };
      return tips[dir.id] || '该方向与当前技能匹配度较低，建议优先发展优势方向。';
    }
    return null;
  };

  const getSuggestionText = (dir) => {
    if (dir.potential < 55) {
      const suggestions = {
        algo: '建议系统学习数学基础和机器学习，从Kaggle比赛起步，积累论文和项目经验。',
        embedded: '深入学习C/C++和操作系统，参与开源硬件项目，关注RISC-V和物联网机会。',
        gamedev: '学习Unity/Unreal引擎，参与GameJam活动，积累游戏Demo作品集。',
        autonomous: '攻读相关方向研究生，学习ROS2和自动驾驶框架，参与Apollo等开源项目。',
        infra: '深入学习Linux内核和网络，掌握K8s生态，参与CNCF开源项目。',
        data: '加强SQL和Python数据分析能力，学习Spark/Flink大数据框架，考取相关认证。',
        frontend: '深入学习React/Vue源码，掌握性能优化和跨端开发，打造高质量个人项目。',
        backend: '系统学习分布式系统，掌握中间件和微服务，积累高并发项目经验。',
      };
      return suggestions[dir.id] || '建议加强该方向的核心技能学习，结合项目实战提升。';
    }
    return null;
  };

  return React.createElement('div', { className: 'analysis-page' },
    React.createElement('div', { className: 'analysis-hero' },
      React.createElement('h2', null, '潜力分析 & 避坑建议'),
      React.createElement('p', null, '基于你的技能画像，找到最适合的职业方向')
    ),
    // Input section
    React.createElement('div', { className: 'analysis-input-section' },
      React.createElement('div', { className: 'input-title' },
        React.createElement(IconBookOpen),
        ' 选择当前阶段'
      ),
      React.createElement('div', { className: 'stage-selector' },
        stages.map(s =>
          React.createElement('button', {
            key: s.id,
            className: `stage-option ${currentStage === s.id ? 'selected' : ''}`,
            onClick: () => setCurrentStage(s.id),
          }, s.label)
        )
      ),
      React.createElement('button', { className: 'analyze-btn', onClick: handleAnalyze },
        React.createElement(IconZap) ? '开始分析' : '开始分析'
      )
    ),
    // Results
    showResults && React.createElement('div', { className: 'results-section' },
      React.createElement('div', { className: 'results-header' },
        React.createElement(IconTarget),
        ' 职业方向分析结果'
      ),
      React.createElement('div', { className: 'direction-grid' },
        directions.map(dir => {
          const scoreClass = getScoreClass(dir.potential);
          const cardClass = getCardClass(dir.potential);
          const warning = getWarningText(dir);
          const suggestion = getSuggestionText(dir);

          return React.createElement('div', {
            key: dir.id,
            className: `direction-card ${cardClass}`,
          },
            React.createElement('div', { className: 'direction-name' }, dir.name),
            React.createElement('div', { className: 'direction-potential' },
              React.createElement('span', { className: `potential-score score-${scoreClass}` }, dir.potential),
              React.createElement('div', { className: 'potential-bar' },
                React.createElement('div', {
                  className: `potential-bar-fill fill-${scoreClass}`,
                  style: { width: `${dir.potential}%` }
                })
              )
            ),
            React.createElement('div', { className: 'direction-desc' }, dir.desc),
            React.createElement('div', { className: 'event-meta' },
              React.createElement('span', { className: 'event-meta-item' },
                '薪资: ', dir.baseSalary
              ),
              React.createElement('span', { className: 'event-meta-item' },
                '资深: ', dir.seniorSalary
              )
            ),
            React.createElement('div', { className: 'event-meta' },
              React.createElement('span', { className: 'event-meta-item' },
                '市场需求: ', dir.marketDemand
              )
            ),
            warning && React.createElement('div', { className: 'warning-box' },
              React.createElement('div', { className: 'warning-title' },
                React.createElement(IconAlertTriangle),
                ' 避坑提示'
              ),
              React.createElement('div', { className: 'warning-text' }, warning)
            ),
            suggestion && React.createElement('div', { className: 'suggestion-box' },
              React.createElement('div', { className: 'suggestion-title' },
                React.createElement(IconLightbulb),
                ' 转型建议'
              ),
              React.createElement('div', { className: 'suggestion-text' }, suggestion)
            )
          );
        })
      ),
      // Learning path
      React.createElement('div', { className: 'learning-path' },
        React.createElement('div', { className: 'path-title' },
          React.createElement(IconBookOpen),
          ` 最优学习路径 · ${topDirection.name}`
        ),
        React.createElement('div', { className: 'path-steps' },
          learningPath.map((step, idx) =>
            React.createElement('div', { key: idx, className: 'path-step' },
              React.createElement('div', { className: `path-step-dot ${idx === 0 ? 'path-step-dot-active' : ''}` }, idx + 1),
              React.createElement('div', { className: 'path-step-content' },
                React.createElement('div', { className: 'path-step-name' }, step.name),
                React.createElement('div', { className: 'path-step-desc' }, step.desc),
                React.createElement('div', { className: 'path-step-time' }, '预计用时: ', step.time)
              )
            )
          )
        )
      )
    )
  );
}

/* ============================
   Main App
   ============================ */
function App() {
  const [activeTab, setActiveTab] = React.useState('timeline');

  const tabs = [
    { id: 'timeline', label: '职业时间轴', icon: React.createElement(IconTimeline) },
    { id: 'skills', label: '技能树', icon: React.createElement(IconSkills) },
    { id: 'analysis', label: '潜力分析', icon: React.createElement(IconAnalysis) },
  ];

  return React.createElement('div', null,
    // Background effects
    React.createElement('div', { className: 'bg-grid' }),
    React.createElement('div', { className: 'bg-glow-orb bg-glow-orb-1' }),
    React.createElement('div', { className: 'bg-glow-orb bg-glow-orb-2' }),
    // App container
    React.createElement('div', { className: 'app-container' },
      // Header
      React.createElement('header', { className: 'app-header' },
        React.createElement('h1', null, '人生阶段职业发展规划'),
        React.createElement('p', null, '中国程序员成长路线 · 从启蒙到职场')
      ),
      // Tab navigation
      React.createElement('nav', { className: 'tab-nav' },
        tabs.map(tab =>
          React.createElement('button', {
            key: tab.id,
            className: `tab-btn ${activeTab === tab.id ? 'active' : ''}`,
            onClick: () => setActiveTab(tab.id),
          },
            React.createElement('span', { className: 'tab-icon' }, tab.icon),
            React.createElement('span', { className: 'tab-label' }, tab.label)
          )
        )
      ),
      // Page content
      React.createElement('div', { className: 'page-content', key: activeTab },
        activeTab === 'timeline' && React.createElement(TimelinePage),
        activeTab === 'skills' && React.createElement(SkillsPage),
        activeTab === 'analysis' && React.createElement(AnalysisPage)
      )
    )
  );
}

/* ============================
   Render
   ============================ */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
