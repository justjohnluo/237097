import LandingPage from './LandingPage';
import CalendarPage from './CalendarPage';
import AboutUs from './AboutUs';
import LearningCenter from './LearningCenter';
import CategoryDetails from './CategoryDetails';
import SearchResults from './SearchResults';
import ProjectDetails from './ProjectDetails';
import Quiz from './Quiz';
import IncubationCenter from './IncubationCenter';
import ExperienceCenter from './ExperienceCenter';
import Profile from './Profile';
import ContactUs from './ContactUs';

const PAGE_TITLE_PREFIX = 'Hubs - ';
const PAGE_DESCRIPTION = 'Hubs - Learning Center. Sample website description for SEO optimization';
const PAGE_KEYWORDS = 'Hubs, learning, center, students, projects, lessons';

// Helper function to create a route object.
// The route object will contain the following attributes:
// - path: The route path
// - title: The title to display on browser window
// - component: The component to render
// - description: (Optional for SEO) The page description. If not provided, the PAGE_DESCRIPTION will be used instead
// - keywords: (Optional for SEO) The page keywords. If not provided, the PAGE_KEYWORDS will be used instead
const createPage = (path, title, component, description, keywords) => {
  return {
    path,
    title: PAGE_TITLE_PREFIX + title,
    description: description || PAGE_DESCRIPTION,
    keywords: keywords || PAGE_KEYWORDS,
    component
  }
};

export default [
  createPage('/', 'Home', LandingPage),
  createPage('/calendar', 'Calendar', CalendarPage),
  createPage('/about-us', 'About us', AboutUs),
  createPage('/learning-center', 'Learning Center', LearningCenter),
  createPage('/category-details/:category', 'Category Details', CategoryDetails),
  createPage('/search-results', 'Search Results', SearchResults),
  createPage('/project-details', 'Project Details', ProjectDetails),
  createPage('/quiz', 'Quiz', Quiz),
  createPage('/incubation-center', 'Incubation Center', IncubationCenter),
  createPage('/experience-center', 'Experience Center', ExperienceCenter),
  createPage('/profile', 'My Profile', Profile),
  createPage('/contact-us', 'Contact Us', ContactUs)
];
