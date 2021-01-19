const schools = [
  {
    active: true,
    address: "Bolton Road Abbey Village Chorley PR6 8DD",
    domain: "www.abbeyvillage.schoolspider.co.uk",
    id: 486,
    title: "Abbey Village Primary School",
    using_wonde: true,
  },
  {
    active: true,
    address: "Livesey Street Manchester Manchester M40 7PR",
    domain: "www.abbott.manchester.sch.uk",
    id: 228,
    title: "Abbott Community Primary School",
    using_wonde: true,
  },
  {
    active: true,
    address: "Abingdon Road Reddish Stockport SK5 7ET",
    domain: "www.abingdon.schoolspider.co.uk",
    id: 527,
    title: "Abingdon Primary School",
    using_wonde: true,
  },
];

const filteredSchools = [
  {
    active: true,
    address: "Abingdon Road Reddish Stockport SK5 7ET",
    domain: "www.abingdon.schoolspider.co.uk",
    id: 527,
    title: "Abingdon Primary School",
    using_wonde: true,
  },
];

const article = {
  body: "<p>This is the body text</p>\r\n",
  date: "1st January 2019",
  files: [
    {
      title: "Residential Confirmation Letter Sent Home Y6",
      file:
        "https://api.schoolspider.co.uk/storage/uploads/256/news/218614_news_file.docx",
    },
  ],
  id: 12345,
  images: [
    {
      large:
        "https://api.schoolspider.co.uk/storage/uploads/15/news/1525519_news_large.jpg",
      small:
        "https://api.schoolspider.co.uk/storage/uploads/15/news/1525519_news_small.jpg",
      title: "Our Lady's athletics competition",
    },
    {
      large:
        "https://api.schoolspider.co.uk/storage/uploads/15/news/1525521_news_large.jpg",
      small:
        "https://api.schoolspider.co.uk/storage/uploads/15/news/1525521_news_small.jpg",
      title: "Our Lady's athletics competition",
    },
  ],
  sounds: [],
  staff_details: "Mr Hulme",
  template: "",
  title: "Title for Testing",
  videos: [
    {
      content:
        "https://api.schoolspider.co.uk/storage/uploads/205/news/56749_news_video.mp4",
      type: "file",
      title: "Calendar 2021",
    },
  ],
};

module.exports = { schools, filteredSchools, article };
