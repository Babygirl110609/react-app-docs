import Card from 'react-bootstrap/Card';

// function ProjectCard(title, about, builtWith, imgURL, siteURL, repoURL) {
//     this.title = title
//     this.about = about
//     this.builtWith = builtWith
//     this.imgURL = imgURL
//     this.siteURL = siteURL
//     this.repoURL = repoURL
//   }
  
  // const foodFestivalCard = new ProjectCard(
  //   'Food Festival',
  //   `  The purpose of this application is to provide the User a guide of all different delicious recipe throughout the week.
  //   'React | Axios | Node.js | Material-UI',
  //   'https://babygirl110609.github.io/food-festival/',
  //   'https://github.com/Babygirl110609/food-festival',
  // )
  
  // const workDaySchedulerCard = new ProjectCard(
  //   'Work Day Scheduler',
  //   'This app will allow user to track their daily schedules. In this app the user will be able to make a to do list for a day and a time that todo list to be complete'. 
  //   'JavaScript | Express.js | Node.js',
  //   'https://babygirl110609.github.io/work-day-scheduler/',
  //   'https://github.com/Babygirl110609/work-day-scheduler',
  // )

  
  // const teamProfileGeneratorCard = new ProjectCard(
  //   'Team-Profile-Generator',
  //   'This app is simply a easy mobile app that company can use to add new hired under their corresponding manager and department',
  //   'JavaScript | Handlebars | Express.js | Node.js',
  //   'https://babygirl110609.github.io/team-profile-generator/',
  //   'https://github.com/Babygirl110609/team-profile-generator',
  // )
  
  // const techBlogCard = new ProjectCard(
  //   'Tech Blog',
  //   `A blog website that allows developers to publish posts and comment on other posts'.
  //    Landing page shows current blog posts and leads the user to a login page. Once logged in, user can view their dashboard which displays an option to create a new post as well as past posts by that user.
  //    The application follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the exxpress-session npm package for authentication.`,
  //   'Node.js | Express.js | MySQL | Handlebars',
  //   'https://github.com/Babygirl110609/tech-blog',
  //   'https://babygirl110609.github.io/tech-blog/',
  // )
  
  // let portfolioData = [
  //   workDaySchedulerCard,
  //   teamProfileGeneratorCard,
  //   foodFestivalCard,
  //   techBlogCard,
  //   ,
  //]


  function ProjectCard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
          {props.description} </Card.Text>
          <Card.Link href={props.github}>Github</Card.Link>
          <Card.Link href={props.live}>🔂 </Card.Link>
          <Card.Img src={props.screenshot} />
        </Card.Body>
      </Card>
    );
  }
  
 

  export default ProjectCard