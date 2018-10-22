
const movieBuilder = (arrayOfMovie)=>{
    let domString = '';
    arrayOfMovie.forEach((movie) => {   
        domString += `<div class="card bg-light mb-3 w-25">
                        <div class="card-header text-center movie-heading">${movie.name}</div>
                        <div class="card-body">
                            <p class="card-text">Summary: ${movie.description}</p>
                            <h7 class="card-title">Genre: ${movie.genre}</h7>
                            <h7 class="card-title">Release Date: ${movie.releaseDate}</h7>
                        </div>
                    </div>`;
                });
    $('#movie').append(domString);
}

export {movieBuilder};