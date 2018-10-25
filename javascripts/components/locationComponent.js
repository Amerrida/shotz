const locationsBuilder = (arrayOfLocations)=>{
    let domString = '';
    arrayOfLocations.forEach((location) => {   
        domString += `<div id="loc" class="card loc p-2 m-3" style="width: 15rem;">
                        <img class="card-img-top" src="${location.locationImage}" alt="Card image cap" width="110px" height="110px">
                        <div class="card-body card-content">
                            <h5 class="card-title">${location.name}</h5>
                            <p class="card-text">Address: ${location.locationAddress}</p>
                        </div>
                        <div class="card-body shoot-time">
                            <h6>Shoot Time:${location.shootTime}</h6>
                        </div>
                    </div>`;
                });
    $('#locations').append(domString);
}

export {locationsBuilder};