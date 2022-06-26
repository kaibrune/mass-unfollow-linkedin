(() => {
  let count = 0;
  function getAllButtons() {
    return document.querySelectorAll('button.is-following') || [];
  }
  async function unfollowAll() {
    const buttons = getAllButtons();

    for (let button of buttons) {
      count = count + 1;

      const name = button.parentElement.querySelector(
        '.follows-recommendation-card__name',
      ).innerText;

      console.log(
        `%c #${count} %c 👋 Unfollowed %c `+name+` `,
        'color: #fff; background-color:#34495e',
        'color: #fff; background-color:#27ae60',
        'color: #000; background-color:#95a5a6', 
      );

      window.scrollTo(0, button.offsetTop - 260);
      button.click();

      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  async function run() {
    await unfollowAll();
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const buttons = getAllButtons();
    if (buttons.length) run();

    if (confirm('🥳 Done! We unfollowed '+count+' connections. Do you want to reload the site to update the page?') == true) {
      location.reload();
    }
  }
  if (confirm('👋 Hi, are you willing to clear up your feed and unfollow all of your connections? Then press "OK" down below.') == true) {
  run();
  }

})();
