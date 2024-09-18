# Tech Blog: Model-View-Controller (MVC)

## Description

Tech Blog is a CMS-style blogging platform where developers can publish and comment on blog posts. Built using the MVC paradigm, it leverages Handlebars.js for templating, Sequelize for ORM, and PostgreSQL for the database. The application includes user authentication with session management, allowing users to create, update, and delete blog posts.

## User Story

As a developer who writes about tech, I want a CMS-style blog site to publish articles and share thoughts, allowing others to comment on my posts.

## Acceptance Criteria

- **Homepage**: Displays existing blog posts, navigation links, and login options.
- **Authentication**: Users can sign up, log in, and log out. Idle sessions require re-login.
- **Dashboard**: Users can view, add, update, and delete their blog posts.
- **Post Interaction**: Users can view posts, add comments, and see comments with associated usernames.

## Getting Started

1. **Setup**:
   - Clone the repository.
   - Install dependencies: `npm install`.
   - Set up PostgreSQL with `schema.sql` and `seeds.sql`.
   - Configure environment variables.

2. **Run**:
   - Start the application: `node server.js`.

3. **Packages**:
   - `express-handlebars` for views.
   - `pg` and `Sequelize` for PostgreSQL.
   - `dotenv` for environment variables.
   - `bcrypt` for password hashing.
   - `express-session` and `connect-session-sequelize` for authentication.

**Note**: Sessions are managed via cookies; idle sessions will prompt for re-login.

## License

MIT License.

## Contribution

Contributions are welcome! Fork the repository and submit a pull request.

## Tests

Run unit tests with `npm test`.

## Contact

For questions or feedback, email [fredony.ernesto@gmail.com](mailto:fredony.ernesto@gmail.com) or find me on GitHub [fredonyernesto](https://github.com/fredonyernesto).

## Repository

Access the project repository [here](httpsgit://github.com/fredonyernesto/tech-blog).

## Walkthrough Video

Watch the walkthrough video [here](https://link-to-your-video).

## Screenshots

![Tech Blog Screenshot](link-to-screenshot.png)

