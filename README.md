# Blog API 📝

## Project Context 💡
This project is a RESTful API for a blog system, where you may sign in to make a post.

### Acquired Knowledge 📖

In this project, I was able to:
- Use Sequelize to integrate the database with the application;
- Create migrations using Sequelize;
- Create associations M:N, 1:N and 1:1 between tables with Sequelize;
- Use Sequelize transactions to do atomic operations in the database;
- Authenticate users using JWT token.

## Main Technologies used 🧰
<table>
    <thead>
        <tr>
            <th>JavaScript</th>
            <th>Express</th>
            <th>Sequelize</th>
            <th>Node.JS</th>
            <th>MySQL</th>
            <th>JWT</th>
            <th>Joi</th>
            <th>Docker</th>
            <th>Insomnia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
                        alt="javascript" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://expressjs.com/" target="_blank">
                    <img
                        src="https://www.orafox.com/wp-content/uploads/2019/01/expressjs.png"
                        alt="express"
                        width="40"
                        height="40"
                    />
                </a>
            </td>
            <td align="center">
                <a href="https://sequelize.org/" target="_blank">
                    <img
                        src="https://sequelize.org/api/v6/image/brand_logo.png"
                        alt="sequelize"
                        width="40"
                        height="40"
                    />
                </a>
            </td>
            <td align="center">
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
                        alt="nodejs" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                 <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
                     <img 
                         src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" 
                         alt="mysql" 
                         width="40" 
                         height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                 <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="noreferrer"> 
                     <img 
                         src="https://jwt.io/img/pic_logo.svg" 
                         alt="jwt" 
                         width="40" 
                         height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://joi.dev/" target="_blank" rel="noreferrer">
                    <img
                        src="https://avatars.githubusercontent.com/u/3774533?s=200&v=4"
                        alt="joi"
                        width="40"
                        height="40"
                    />
                </a>
            </td>
            <td align="center">
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" 
                        alt="docker" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://insomnia.rest/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/insomnia/ibTLPyjwVebnZjMGKvz6ztarnuV2" 
                        alt="insomnia" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
        </tr>
    </tbody>
</table>

## Running the application ⚙️

1. Clone the repository and enter it
```
git clone git@github.com:ImVictorM/Blog-API.git && cd Blog-API
```
### Methods

<details>
<summary><h4>🐋 Running with docker</h4></summary>

 > You must have docker installed
 
2. Get the containers running
```
docker-compose up -d
```
3. Enter the server's container
```
docker exec -it blogs_api bash
```
4. Install the dependencies
```
npm install
```

5. Start the server
```
npm run start
---- or ----
npm run prestart
npm run debug
```
</details>

<details>
<summary><h4>🖥️ Running locally</h4></summary>

 > You must have node installed
 
2. Install the dependencies
```
npm install
```

3. Rename the file `.env.example` to `.env`

4. Start the server
```
npm run start
---- or ----
npm run prestart
npm run debug
```

</details>
