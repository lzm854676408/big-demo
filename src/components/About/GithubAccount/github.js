import axios from 'axios';

function getRepos(lzm854676408){
  return axios.get(`https://api.github.com/users/${lzm854676408}/repos?per_page=5`);
};

function getUserInfo(lzm854676408){
  return axios.get(`https://api.github.com/users/${lzm854676408}`);
};

let github = {
  getGithubInfo(lzm854676408){
    return axios.all([getRepos(lzm854676408), getUserInfo(lzm854676408)])
      .then((arr) => {
        return {
          repos: arr[0].data,
          user: arr[1].data
        }
      });
  }
};

export default github;
