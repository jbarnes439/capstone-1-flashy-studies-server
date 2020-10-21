# Flashy-studies server
  This is the server side programming for the flashy-studies app.
  A live version of the app can be found here: https://flashy-studies.vercel.app/

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## ENDPOINTS

### POST /api/auth/login
 
    // req.body
    {
      username: String,
      password: String
    }

    // res.body

    {
      authToken: String,
      user: String
    }
  

### POST /api/users

    // req.body
    {
      username: String,
      password: String
    }

    // res.body
    {
      id: Integer,
      username: String,
      date_created: String
    }


### GET /api/preMadeQuestions

    // res.body
    {
      questions: [
        {
          id: Integer,
          question: String
        }
      ],
    }


### GET /api/preMadeQuestions/:id

    // req.params
    {
      id: ID
    }

    // res.body
    {
      id: Integer,
      question: String
    }


### GET /api/preMadeAnswers

    // res.body
    {
      answers: [
        {
          id: Integer,
          answer: String,
          question_id: Integer,
          correct: Boolean
        }
      ]
    }


### GET /api/preMadeanswers/questions/:questionId
    // req.params
    {
      id: questionId
    }

    // res.body
    {
      answers: [
        {
          id: Integer,
          answer: String,
          question_id: questionId,
          correct: Boolean
        }
      ]
    }


### GET /api/preMadeAnswers/correct

    // res.body
    {
      id: Integer,
      answer: String,
      question_id: Integer,
      correct: True
    }


## Technologies:
  Create-react-app was used to create the front end. The app utilizes a RESTful API pattern created with Postgresql, ExpressJS and NodeJS.

### Client:
  The client code can be found here: https://github.com/jbarnes439/capstone-1-Flashy-Studies-Client.git