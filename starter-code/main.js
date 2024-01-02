"use strict";

const searchBtn = document.querySelector(".search-button");
const searchInput = document.querySelector(".user-search-bar__input");


searchBtn.addEventListener("click", function () {

  console.log(searchInput.value);
  fetch(`https://api.github.com/users/${searchInput.value}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
  
      function userPersonImg() {
        if (data.avatar_url) {
          const personImg = data.avatar_url;
          const imgTag = document.querySelector(".left-side__img");
          imgTag.src = personImg;
        }
      }
  
      function userJoinedDate() {
        if (data.created_at) {
          const joined = data.created_at;
          document.querySelector(
            ".when-user-joined"
          ).textContent = `Joined ${joined}`;
        }
      }
  
      function userUserName() {
        if (data.name) {
          const userName = data.name;
          document.querySelector(".user-name").textContent = userName;
        }
      }
  
      function userNickName() {
        if (data.login) {
          const nickName = data.login;
          document.querySelector(".nickname").textContent = `@${nickName}`;
        }
      }
  
      function userBio() {
        if (data.bio) {
          const personBio = data.bio;
          document.querySelector(".user-bio").textContent = personBio;
        } else {
          document.querySelector(
            ".user-bio"
          ).textContent = `This profile has no bio`;
        }
      }
  
      function userRepos() {
        if (data.public_repos) {
          const userRepos = data.public_repos;
  
          document.querySelector(".user-follow-infos__number-repos").textContent =
            userRepos;
        }
      }
  
      function userFollowers() {
        if (data.followers) {
          const userFollowers = data.followers;
          document.querySelector(
            ".user-follow-infos__number-followers"
          ).textContent = userFollowers;
        } else {
          document.querySelector(
            ".user-follow-infos__number-followers"
          ).textContent = 0;
        }
      }
  
      function userFollowing() {
        if (data.following) {
          const userFollowing = data.following;
          document.querySelector(
            ".user-follow-infos__number-following"
          ).textContent = userFollowing;
        } else {
          document.querySelector(
            ".user-follow-infos__number-following"
          ).textContent = 0;
        }
      }
  
      function userLocation() {
        if (data.location) {
          const userLocation = data.location;
          document.querySelector(".user-contact-text-location").textContent =
            userLocation;
          document
            .querySelector(".user-contact-text-location")
            .classList.remove("active");
        } else {
          document.querySelector(".user-contact-text-location").textContent =
            "Not Available";
          document
            .querySelector(".user-contact-text-location")
            .classList.add("active");
  
          document
            .querySelector(".user-contact__img-location")
            .classList.add("active-img");
        }
      }
  
      function userTwitter() {
        if (data.twitter_username) {
          const userTwitter = data.twitter_username;
          document.querySelector(".user-contact-text-twitter").textContent =
            userTwitter;
  
          document
            .querySelector(".user-contact__img-twitter")
            .classList.remove("active-img");
        } else {
          document.querySelector(".user-contact-text-twitter").textContent =
            "Not Available";
  
          document
            .querySelector(".user-contact-text-twitter")
            .classList.add("active");
  
          document
            .querySelector(".user-contact__img-twitter")
            .classList.add("active-img");
        }
      }
  
      function userWebsite() {
        if (data.html_url) {
          const userWebsite = data.html_url;
          document.querySelector(".user-contact-text-website").textContent =
            userWebsite;
  
          document
            .querySelector(".user-contact__img-website")
            .classList.remove("active-img");
        } else {
          document.querySelector(".user-contact-text-website").textContent =
            "Not Available";
  
          document
            .querySelector(".user-contact-text-website")
            .classList.add("active");
  
          document
            .querySelector(".user-contact__img-website")
            .classList.add("active-img");
        }
      }
  
      function usercompany() {
        if (data.company) {
          const userCompany = data.company;
          document.querySelector(".user-contact-text-company").textContent =
            userCompany;
  
          document
            .querySelector(".user-contact__img-company")
            .classList.remove("active-img");
        } else {
          document.querySelector(".user-contact-text-company").textContent =
            "Not Available";
  
          document
            .querySelector(".user-contact-text-company")
            .classList.add("active");
  
          document
            .querySelector(".user-contact__img-company")
            .classList.add("active-img");
        }
      }
  
      userPersonImg();
      userJoinedDate();
      userUserName();
      userNickName();
      userBio();
      userRepos();
      userFollowers();
      userFollowing();
      userLocation();
      userTwitter();
      userWebsite();
      usercompany();
    })
    .catch((error) => {
      console.log(error);
    });
});

