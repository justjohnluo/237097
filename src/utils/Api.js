// Mock API implementation
const VALID_CATEGORIES = [
  'science',
  'history',
  'languages',
  'arts',
  'business',
  'industry',
  'culture',
  'dyi',
  'tech',
  'politics',
  'literature',
  'culinary'
];

const VALID_PROJECT_TYPES = [
  'lesson',
  'interactive',
  'museum'
];

const VALID_USER_LEVELS = [
  'Sage',
  'Wise one',
  'Learner'
];

// This is the number of the available project images
// this should be removed once switch to a real API
// as it's only used to generate mock projects
const AVAILABLE_PROJECT_IMAGES = 4;

// Helper function to generate projects
// Instead of hardcode and load mock projects from json
// we use this function to generate as many as we want
const _generateProjects = (category, limit, type) => {
  const projects = [];
  for (let i = 0; i < limit; i++) {
    projects.push({
      name: 'Cool project name',
      photo: `/i/projects/project-${parseInt(Math.random() * AVAILABLE_PROJECT_IMAGES + 1, 10)}.jpg`,
      date: 'March 12, 2017',
      category: category || VALID_CATEGORIES[parseInt(Math.random() * VALID_CATEGORIES.length, 10)],
      type: type || VALID_PROJECT_TYPES[parseInt(Math.random() * VALID_PROJECT_TYPES.length, 10)],
      level: parseInt(Math.random() * 3 + 1, 10)
    });
  }
  return projects;
};

// Helper function to generate campaigns
// Instead of hardcode and load mock campaigns from json
// we use this function to generate as many as we want
const _generateCampaigns = (limit) => {
  const campaigns = [];
  for (let i = 0; i < limit; i++) {
    campaigns.push({
      name: 'CAMPAIGN NAME',
      photo: `/i/campaigns/campaign1.png`,
      date: 'Created May 2017',
      category: VALID_CATEGORIES[parseInt(Math.random() * VALID_CATEGORIES.length, 10)],
      sponsors: [
        {
          name: 'Sponsor name',
          logo: 'sponsor-logo-sm.png'
        },
        {
          name: 'Sponsor name',
          logo: 'sponsor-logo-sm.png'
        },
        {
          name: 'Sponsor name',
          logo: 'sponsor-logo-sm.png'
        }
      ]
    });
  }
  return campaigns;
};

// Helper function to generate students
// Instead of hardcode and load mock students from json
// we use this function to generate as many as we want
const _generateStudents = (limit) => {
  const students = [];
  for (let i = 0; i < limit; i++) {
    students.push({
      name: 'ALICE MONTOGOMERY',
      photo: `/i/users/lainy-purcell.png`,
      date: 'Member since May 2017',
      level: VALID_USER_LEVELS[parseInt(Math.random() * VALID_USER_LEVELS.length, 10)],
      points: parseInt(Math.random() * 20000, 10),
      interested_in: [
        VALID_CATEGORIES[parseInt(Math.random() * VALID_CATEGORIES.length, 10)],
        VALID_CATEGORIES[parseInt(Math.random() * VALID_CATEGORIES.length, 10)],
        VALID_CATEGORIES[parseInt(Math.random() * VALID_CATEGORIES.length, 10)]
      ]
    });
  }
  return students;
};

export default {
  /*
   * Fetch events
   * @param cb The callback function
   */
  getEvents: (cb) => {
    fetch('/data/events.json')
      .then((res)=> res.json())
      .then((json) => cb(null, json))
      .catch(cb);
  },
  /*
   * Fetch sponsors
   * @param cb The callback function
   */
  getSponsors: (cb) => {
    fetch('/data/sponsors.json')
      .then((res)=> res.json())
      .then((json) => cb(null, json))
      .catch(cb);
  },
  /*
   * Fetch categories
   * @param cb The callback function
   */
  getCategories: (cb) => {
    fetch('/data/categories.json')
      .then((res)=> res.json())
      .then((json) => cb(null, json))
      .catch(cb);
  },
  /*
   * Fetch project details
   * @param cb The callback function
   */
  getProjectDetails: (cb) => {
    fetch('/data/sample-project.json')
      .then((res)=> res.json())
      .then((json) => cb(null, json))
      .catch(cb);
  },
  /*
   * Fetch quiz
   * @param cb The callback function
   */
  getQuiz: (cb) => {
    fetch('/data/quiz.json')
      .then((res)=> res.json())
      .then((json) => cb(null, json))
      .catch(cb);
  },
  /*
   * Generate projects
   * @param category (optional) the project category
   * @param limit the projects array limit
   * @param defaultType (optional) the default project type
   * @param cb The callback function
   */
  getProjects: (category, limit, defaultType, cb) => {
    if (!category) {
      return cb(_generateProjects(category, limit, defaultType));
    }
    cb({
      category,
      projects: _generateProjects(category, limit, defaultType)
    });
  },
  /*
   * Generate campaigns
   * @param limit the projects array limit
   * @param cb The callback function
   */
  getCampaigns: (limit, cb) => {
    cb(_generateCampaigns(limit));
  },
  /*
   * Generate students
   * @param limit the projects array limit
   * @param cb The callback function
   */
  getStudents: (limit, cb) => {
    cb(_generateStudents(limit));
  },
  /*
   * Check authentication
   * @param cb The callback function
   */
  checkAuthentication: (cb) => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    cb(user);
  },
  /*
   * Login user
   * @param credentials the user credentials
   * @param cb The callback function
   */
  login: (credentials, cb) => {
    // Fetch user details
    const getUser = (type) => {
      fetch(`/data/${type}.json`)
      .then((res) => res.json())
      .then((json) => {
        sessionStorage.setItem('user', JSON.stringify(json));
        cb(null, json)
      })
      .catch(cb);
    };
    if ((credentials.username === 'user' || credentials.username === 'admin')
      && credentials.password === 'pass') {
      getUser(credentials.username);
    } else {
      cb(null, null);
    }
  },
  /*
   * Logout user
   * @param cb The callback function
   */
  logout: (cb) => {
    sessionStorage.removeItem('user');
    cb();
  }
};
