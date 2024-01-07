"use strict";

const searchBtn = document.querySelector(".search-button");
const searchInput = document.querySelector(".user-search-bar__input");

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getPersonData = function () {
  fetch(`https://api.github.com/users/${searchInput.value}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      if (data.id) {
        document
          .querySelector(".user-search-button span")
          .classList.add("no-result-hidden");

        document
          .querySelector(".user-search-button span")
          .classList.remove("no-result-active");
      } else {
        document
          .querySelector(".user-search-button span")
          .classList.add("no-result-active");

        document
          .querySelector(".user-search-button span")
          .classList.remove("no-result-hidden");
      }

      function userPersonImg() {
        if (data.avatar_url) {
          const personImg = data.avatar_url;
          let imgTag = document.querySelector(".left-side__img");
          imgTag.src = personImg;
        } else {
          const defaultImg = "./assets/default-user.png";
          document.querySelector(".left-side__img").src = defaultImg;
        }
      }

      function userJoinedDate() {
        if (data.created_at) {
          const joined = data.created_at;

          const splittedJoined = joined.split("-");
          const replacedMonth = splittedJoined[1].replace("0", "");
          Number(replacedMonth);
          const joinDay = splittedJoined[2].split("T");

          document.querySelector(".when-user-joined").textContent = `Joined ${
            joinDay[0] +
            " " +
            month[replacedMonth - 1] +
            " " +
            splittedJoined[0]
          }`;
        } else {
          document.querySelector(".when-user-joined").textContent =
            "Joined 25 Jan 2011";
        }
      }

      function userUserName() {
        if (data.name) {
          const userName = data.name;
          document.querySelector(".user-name").textContent = userName;
        } else {
          document.querySelector(".user-name").textContent = "The Octocat";
        }
      }

      function userNickName() {
        if (data.login) {
          const nickName = data.login;
          document.querySelector(".nickname").textContent = `@${nickName}`;
        } else {
          document.querySelector(".nickname").textContent = `@octocat`;
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

          document.querySelector(
            ".user-follow-infos__number-repos"
          ).textContent = userRepos;
        } else {
          document.querySelector(
            ".user-follow-infos__number-repos"
          ).textContent = 0;
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

          document
            .querySelector(".user-contact__img-location")
            .classList.remove("active-img");
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

          document
            .querySelector(".user-contact-text-twitter")
            .classList.remove("active");
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

          document
            .querySelector(".user-contact-text-company")
            .classList.remove("active");
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
};

searchBtn.addEventListener("click", getPersonData);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Enter") {
    getPersonData();
  }
});
