document.addEventListener('DOMContentLoaded', ()=>{
    // UI declaration
    const game_home = document.querySelector('#gameHome');
    const all_games = document.querySelector('all_games_btn')
    const open_game = document.querySelectorAll('.open_btns')


    // adding eventLisners
    all_games.addEventListener('click',displayHome)
    open_game.addEventListener('click', gameDisplay)
    
})


function displayHome() {
    game_home.style.display = 'block';
    game1.style.display = 'none';

}

function gameDisplay(e) {
    const game = document.querySelector(`#${e.target.dataset.game_id}`)
    game_home.style.display = 'none';
    game.style.display = 'block'
}