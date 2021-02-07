document.addEventListener('DOMContentLoaded', ()=>{
    // UI declaration
    
    const all_games = document.querySelector('#all_games_btn')
    const open_game = document.querySelectorAll('.open_btns')


    // adding eventLisners
    all_games.addEventListener('click',displayHome)

    open_game.forEach(btn => {
        btn.addEventListener('click', gameDisplay)
    })
    
})



function displayHome() {
    const game_home = document.querySelector('#gameHome');
    game_home.style.display = 'block';
    document.querySelector('#game1').style.display = 'none';

}

function gameDisplay(game) {
    const game_home = document.querySelector('#gameHome');
    game_home.style.display = 'none';
    game.style.display = 'block'
}