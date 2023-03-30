import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Nextra-Blog</span>,
  project: {
    link: "https://github.com/tohsaka888/nextra-blog",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/tohsaka888/nextra-blog",
  footer: {
    text: '',
    component: <></>
  },
  toc: {
    title: "本页条目",
  },
  feedback: {
    content: "发现有错误？给我反馈问题☞"
  },
  editLink: {
    text: "编辑本页内容☞"
  }
};

export default config;
