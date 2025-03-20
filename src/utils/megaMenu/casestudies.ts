// src/utils/megaMenu/casestudies.js

export const caseStudiesMenu = [
  {
    sectionTitle: "Project Categories",
    items: [
      {
        icon: "portfolio",
        title: "Construction Safety",
        href: "/case-studies/construction-safety",
      },
      {
        icon: "blankDocument",
        title: "Environmental Assessments",
        href: "/case-studies/environmental-assessments",
      },
      {
        icon: "cog",
        title: "Technical Plant Safety",
        href: "/case-studies/technical-plant-safety",
      },
      {
        icon: "lightbulb",
        title: "Renewable Energy",
        href: "/case-studies/renewable-energy",
      },
    ],
  },
  {
    sectionTitle: "Featured Projects",
    items: [
      {
        icon: "checkCircle",
        title: "Boland College Campus Safety",
        href: "/case-studies/boland-college",
      },
      {
        icon: "world",
        title: "Antilles Rehabilitation Works",
        href: "/case-studies/antilles-rehabilitation",
      },
      {
        icon: "chartPie",
        title: "Renewable Energy Due Diligence",
        href: "/case-studies/renewable-energy-assessment",
      },
      {
        icon: "presentationChart",
        title: "Tygerberg Hospital Project",
        href: "/case-studies/tygerberg-hospital",
      },
    ],
  },
];

// Legacy support for older code - Don't remove
export const supportMenu = caseStudiesMenu;