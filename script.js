// Platform data switcher for Kingston internship section
const platformData = {
  overall: {
    label: "Cross-platform Summary",
    title: "All Platforms｜整体运营数据",
    metricOne: "7,236",
    metricOneLabel: "Total Tracked Views｜累计可追踪浏览量",
    metricTwo: "1,206",
    metricTwoLabel: "Average Views per Platform｜平台平均浏览量",
    metricThree: "6",
    metricThreeLabel: "Platforms Tracked｜覆盖平台数量",
    note:
      "This summary combines available analytics from Facebook, Instagram, RedBook, TikTok and WeChat. It demonstrates my ability to collect platform data, compare content performance and present marketing outcomes. 该部分整合了实习期间可追踪的平台后台数据，用于展示我对多平台运营表现的整理、分析和呈现能力。"
  },

  facebook: {
    label: "Facebook / Meta",
    title: "Facebook Page Performance｜Facebook 主页表现",
    metricOne: "1,085",
    metricOneLabel: "Page Views｜主页浏览量",
    metricTwo: "+827.4%",
    metricTwoLabel: "Page View Growth｜主页浏览量增长",
    metricThree: "34",
    metricThreeLabel: "Engagements｜互动量",
    note:
      "Facebook analytics showed 1,085 page views, representing a 827.4% increase compared with the previous period. The page also recorded 34 engagements and 502 people reached. Facebook 数据显示主页浏览量达到 1,085，较上一周期增长 827.4%，同时获得 34 次互动及 502 浏览人数。"
  },

  instagram: {
    label: "Instagram",
    title: "Instagram Content Performance｜Instagram 内容表现",
    metricOne: "1,143",
    metricOneLabel: "Views｜浏览量",
    metricTwo: "70",
    metricTwoLabel: "Profile Activity｜主页活动",
    metricThree: "66",
    metricThreeLabel: "Profile Visits｜主页访问",
    note:
      "Instagram recorded 1,143 views over the selected 90-day period. Profile activity reached 70, including 66 profile visits and 4 external link taps. Content views were mainly from followers, with followers contributing 65.4% of views. Instagram 在所选 90 天周期内获得 1,143 浏览量，主页活动为 70，其中包括 66 次主页访问和 4 次外部链接点击。"
  },

  redbook: {
    label: "RedBook / Xiaohongshu",
    title: "RedBook Performance｜小红书内容表现",
    metricOne: "1,228",
    metricOneLabel: "Views｜浏览量",
    metricTwo: "125",
    metricTwoLabel: "Viewers / Watches｜观看量",
    metricThree: "505",
    metricThreeLabel: "Followers｜粉丝数",
    note:
      "RedBook analytics showed 1,228 views, 125 watches and 505 followers. Audience data also showed stronger female representation, with women accounting for 67% of the audience. 小红书数据显示浏览量为 1,228，观看量为 125，粉丝数为 505；粉丝画像中女性占比 67%。"
  },

  tiktok: {
    label: "TikTok",
    title: "TikTok Video Performance｜TikTok 视频表现",
    metricOne: "2K",
    metricOneLabel: "Video Views｜观看次数",
    metricTwo: "20",
    metricTwoLabel: "Profile Visits｜主页访问量",
    metricThree: "30",
    metricThreeLabel: "Interactions｜互动总量",
    note:
      "TikTok data recorded around 2K video views, 20 profile visits, 28 likes, 1 comment and 1 share. Search was the major traffic source, contributing 81.1% of traffic. TikTok 数据显示观看次数约 2K，主页访问量 20，获得 28 个赞、1 条评论和 1 次分享；搜索来源占比 81.1%。"
  },

  wechat: {
    label: "WeChat Official Account",
    title: "WeChat Official Account｜微信公众号数据",
    metricOne: "38",
    metricOneLabel: "Readers｜阅读人数",
    metricTwo: "36.8%",
    metricTwoLabel: "Service Account Homepage｜服务号主页来源",
    metricThree: "21.1%",
    metricThreeLabel: "Moments Source｜朋友圈来源",
    note:
      "WeChat data showed 38 readers. The main traffic sources included Service Account homepage at 36.8%, Moments at 21.1%, chat conversation at 18.4% and Service Account messages at 13.2%. 微信公众号数据显示阅读人数为 38，主要来源包括服务号主页 36.8%、朋友圈 21.1%、聊天会话 18.4% 及服务号消息 13.2%。"
  }
};

const platformTabs = document.querySelectorAll(".platform-tab");

platformTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const platform = tab.dataset.platform;
    const data = platformData[platform];

    platformTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    document.getElementById("platformLabel").textContent = data.label;
    document.getElementById("platformTitle").textContent = data.title;
    document.getElementById("metricOne").textContent = data.metricOne;
    document.getElementById("metricOneLabel").textContent = data.metricOneLabel;
    document.getElementById("metricTwo").textContent = data.metricTwo;
    document.getElementById("metricTwoLabel").textContent = data.metricTwoLabel;
    document.getElementById("metricThree").textContent = data.metricThree;
    document.getElementById("metricThreeLabel").textContent = data.metricThreeLabel;
    document.getElementById("platformNote").textContent = data.note;
  });
});
/* ================= CASE ANALYSIS MODAL ================= */
const caseData = {
  moutai: {
    label: "Academic Financial Analysis / 学术型财务分析项目",
    title: "Guizhou Moutai Income Statement Analysis",
    titleCn: "贵州茅台利润表分析",
    overview: `
      This case analyses Kweichow Moutai’s income statement performance, focusing on revenue growth,
      cost structure, selling expenses, operating profit and profitability. The purpose is to understand
      how financial statement data reflects the company’s pricing power, brand strength and market position
      in China’s high-end liquor industry.
      <br><br>
      本案例围绕贵州茅台的利润表表现展开分析，重点关注收入增长、成本结构、销售费用、营业利润及盈利能力。
      该分析的目的在于理解财务报表数据如何反映企业在中国高端白酒行业中的定价能力、品牌价值和市场地位。
    `,
    questions: [
      "What factors supported Moutai’s revenue growth?｜贵州茅台收入增长的主要驱动因素是什么？",
      "How did cost and expense changes affect profitability?｜成本与费用变化如何影响企业盈利能力？",
      "What potential financial risks may affect future performance?｜哪些潜在财务风险可能影响未来表现？"
    ],
    methods: [
      "Income statement analysis｜利润表分析",
      "Revenue and expense trend analysis｜收入与费用趋势分析",
      "Profitability assessment｜盈利能力评估",
      "Brand and pricing power interpretation｜品牌力与定价能力解读"
    ],
    focus: `
      My analysis focused on how Moutai maintained revenue growth through brand strength, premium pricing
      and channel position. I also reviewed the growth of selling expenses and administrative expenses to
      understand whether higher costs could create pressure on future profitability.
      <br><br>
      我的分析重点是解释贵州茅台如何通过品牌力、高端定价和渠道地位维持收入增长。同时，我也分析了销售费用和管理费用的变化，
      判断成本上升是否会对未来盈利能力形成压力。
    `,
    previews: [
      {
        img: "1.1.png",
        caption: "Income Statement Summary｜利润表摘要"
      },
      {
        img: "1.2.png",
        caption: "Revenue & Expense Trend｜收入与费用趋势"
      },
      {
        img: "1.3.png",
        caption: "Key Insights｜核心结论"
      },
      {
        img: "1.4.png",
        caption: "Research Framework｜研究框架"
      }
    ],
    skills: [
      "Financial Statement Analysis",
      "Profitability Analysis",
      "Trend Evaluation",
      "Brand Pricing Power",
      "Business Risk Thinking"
    ]
  },

  jbh: {
    label: "Business Environment Case Study / 商业环境案例分析",
    title: "JB Hi-Fi Market Environment Analysis",
    titleCn: "JB Hi-Fi 市场环境分析",
    overview: `
      This case examines how macroeconomic conditions, inflation pressure, consumer spending behaviour
      and industry competition may affect JB Hi-Fi’s retail performance.
      <br><br>
      本案例分析宏观经济环境、通货膨胀压力、消费者支出行为和行业竞争如何影响 JB Hi-Fi 的零售表现。
    `,
    questions: [
      "How does inflation affect discretionary retail spending?｜通货膨胀如何影响可选消费品支出？",
      "How does consumer price sensitivity influence pricing and promotion strategy?｜消费者价格敏感度如何影响定价和促销策略？",
      "What competitive pressures does JB Hi-Fi face?｜JB Hi-Fi 面临哪些竞争压力？"
    ],
    methods: [
      "Macroeconomic analysis｜宏观经济分析",
      "Consumer spending analysis｜消费者支出分析",
      "Porter’s Five Forces｜波特五力分析",
      "Retail risk assessment｜零售风险分析"
    ],
    focus: `
      My analysis focused on connecting economic pressure with business decisions. Instead of only describing inflation,
      I examined how weaker consumer spending may increase price sensitivity, create demand for promotions and put pressure on gross margin.
      <br><br>
      我的分析重点是把宏观经济压力和企业实际经营决策联系起来，分析消费支出压力如何提高价格敏感度、增加促销依赖，
      并对毛利率产生影响。
    `,
    previews: [
      {
        img: "2.1.png",
        caption: "CPI & Inflation Trend｜CPI 与通胀趋势"
      },
      {
        img: "2.2.png",
        caption: "Porter’s Five Forces｜波特五力分析"
      },
      {
        img: "2.3.png",
        caption: "Retail Risk Summary｜零售风险总结"
      },
      {
        img: "2.4.png",
        caption: "Analysis Framework｜分析框架"
      }
    ],
    skills: [
      "Business Environment Analysis",
      "Retail Strategy",
      "Consumer Behaviour",
      "Competitive Analysis",
      "Commercial Risk Thinking"
    ]
  },

  mengniu: {
    label: "Independent Company Case Study / 独立企业案例分析",
    title: "Mengniu Dairy Performance & Brand Competitiveness Analysis",
    titleCn: "蒙牛乳业经营表现与品牌竞争力分析",
    overview: `
      This independent case study analyses Mengniu Dairy’s business performance and brand competitiveness
      using publicly available financial and market information.
      <br><br>
      本独立案例基于公开财务与市场信息，分析蒙牛乳业的经营表现与品牌竞争力。
    `,
    questions: [
      "How did Mengniu improve gross margin under industry pressure?｜蒙牛如何在行业压力下改善毛利率？",
      "What do revenue changes reveal about demand pressure?｜收入变化如何反映市场需求压力？",
      "How can brand strength and product structure support competitiveness?｜品牌力和产品结构如何支持企业竞争力？"
    ],
    methods: [
      "Public financial data review｜公开财务数据回顾",
      "Gross margin and cost structure analysis｜毛利率与成本结构分析",
      "Consumer goods market analysis｜消费品行业分析",
      "Brand competitiveness analysis｜品牌竞争力分析"
    ],
    focus: `
      My analysis focused on how Mengniu responded to a challenging dairy market through margin improvement,
      product mix adjustment and brand competitiveness.
      <br><br>
      我的分析重点是解释蒙牛如何在乳制品行业需求压力下，通过毛利率改善、产品结构调整和品牌竞争力维持市场表现。
    `,
    previews: [
      {
        img: "3.1.png",
        caption: "Financial Summary｜财务表现摘要"
      },
      {
        img: "3.2.png",
        caption: "Revenue & Profit Trend｜收入与利润趋势"
      },
      {
        img: "3.3.png",
        caption: "Profitability & Efficiency Ratios｜盈利能力与经营效率指标"
      },
      {
        img: "3.4.png",
        caption: "Strategic Outlook & Recommendations｜战略展望与建议"
      }
    ],
    skills: [
      "Financial Analysis",
      "Brand Competitiveness",
      "Consumer Goods Market Analysis",
      "Cost Structure Thinking",
      "Commercial Insight"
    ]
  },

  byd: {
    label: "Independent Marketing Communication Case / 独立市场传播案例分析",
    title: "BYD Australia EV Adoption Communication Strategy",
    titleCn: "比亚迪澳洲电动车采用传播策略分析",
    overview: `
      This independent marketing communication case explores how BYD Australia could increase EV consideration
      among mainstream household car buyers by addressing concerns around cost, charging, range and daily practicality.
      <br><br>
      本独立市场传播案例分析比亚迪澳洲如何提升主流家庭购车人群对电动车的考虑度，重点关注价格、充电、
      续航和日常实用性等消费者顾虑。
    `,
    questions: [
      "Why are Australian households still hesitant about EVs?｜为什么澳大利亚主流家庭仍然对电动车犹豫？",
      "How can BYD reduce consumers’ perceived risk before purchase?｜比亚迪如何降低消费者购买前的感知风险？",
      "What message can make EVs feel practical and suitable for family life?｜什么传播信息能让电动车显得更实用、更适合家庭生活？"
    ],
    methods: [
      "Target audience analysis｜目标受众分析",
      "Consumer barrier mapping｜消费者障碍识别",
      "Brand message framing｜品牌信息框架设计",
      "Campaign communication strategy｜活动传播策略设计"
    ],
    focus: `
      My analysis focused on changing EV communication from “technology and sustainability” to “daily confidence and family practicality”.
      The key insight is that many consumers are not against EVs; they are afraid of making an expensive mistake.
      <br><br>
      我的分析重点是把电动车传播从“科技与环保”转向“日常信心与家庭实用性”。核心洞察是：很多消费者并不是反对电动车，
      而是害怕做出一个昂贵且不适合家庭生活的错误决策。
    `,
    previews: [
      {
        img: "4.1.png",
        caption: "Strategic Direction｜战略方向"
      },
      {
        img: "4.2.png",
        caption: "Strategic Priorities｜战略重点举措"
      },
      {
        img: "4.3.png",
        caption: "Implementation Roadmap｜实施路线图"
      },
      {
        img: "4.4.png",
        caption: "Risk Landscape & Strategic Responses｜风险与应对策略"
      }
    ],
    skills: [
      "Marketing Strategy",
      "Consumer Insight",
      "Brand Communication",
      "Campaign Planning",
      "Creative Brief Development"
    ]
  }
};

const caseModal = document.getElementById("caseModal");
const caseModalBody = document.getElementById("caseModalBody");
const caseModalClose = document.getElementById("caseModalClose");
const caseButtons = document.querySelectorAll(".case-detail-btn");

function renderCaseDetail(caseKey) {
  const item = caseData[caseKey];
  if (!item) return;

  const questions = item.questions.map(q => `<li>${q}</li>`).join("");
  const methods = item.methods.map(m => `<li>${m}</li>`).join("");
  const previews = item.previews.map(preview => `
    <div class="case-preview-item">
      <img src="${preview.img}" alt="${preview.caption}">
      <div class="case-preview-caption">${preview.caption}</div>
    </div>
  `).join("");
  const skills = item.skills.map(skill => `<span>${skill}</span>`).join("");

  caseModalBody.innerHTML = `
    <div class="case-detail-header">
      <span class="case-detail-label">${item.label}</span>
      <h2>${item.title}</h2>
      <h3>${item.titleCn}</h3>
      <p>${item.overview}</p>
    </div>

    <div class="case-detail-section">
      <h4>Key Questions / 核心问题</h4>
      <ul class="case-detail-list">
        ${questions}
      </ul>
    </div>

    <div class="case-detail-section">
      <h4>Methods / 分析方法</h4>
      <ul class="case-detail-list">
        ${methods}
      </ul>
    </div>

    <div class="case-detail-section">
      <h4>My Analysis Focus / 我的分析重点</h4>
      <p>${item.focus}</p>
    </div>

    <div class="case-detail-section">
      <h4>Preview Materials / 预览材料</h4>
      <div class="case-preview-grid">
        ${previews}
      </div>
    </div>

    <div class="case-detail-section">
      <h4>Skills Demonstrated / 能力体现</h4>
      <div class="case-skill-tags">
        ${skills}
      </div>
    </div>
  `;

  caseModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

caseButtons.forEach(button => {
  button.addEventListener("click", () => {
    renderCaseDetail(button.dataset.case);
  });
});

function closeCaseModal() {
  caseModal.classList.remove("active");
  document.body.style.overflow = "";
}

caseModalClose.addEventListener("click", closeCaseModal);

caseModal.addEventListener("click", event => {
  if (event.target.classList.contains("case-modal-overlay")) {
    closeCaseModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && caseModal.classList.contains("active")) {
    closeCaseModal();
  }
});
