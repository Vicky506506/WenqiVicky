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
