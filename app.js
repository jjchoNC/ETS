const curElement = document.getElementById("hasil");

function createCard(nama, id) {
    // card col
    const outerDiv = document.createElement("div");
    outerDiv.className = "col-lg-2 col-md-3 col-sm-12 col-12 mb-3";
    outerDiv.style.marginTop = "20px";

    // card style
    const cardDiv = document.createElement("div");
    cardDiv.className = `card border-left-primary shadow h-100 py-2`;
    cardDiv.style.borderRadius = "5px";

    // card body
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    // align-center
    const rowDiv = document.createElement("div");
    rowDiv.className = "row no-gutters align-items-center";

    // right margin
    const colDiv = document.createElement("div");
    colDiv.className = "col mr-2";

    // value 1
    const titleDiv = document.createElement("div");
    titleDiv.className = "text-xs font-weight-bold text-primary text-uppercase mb-2";
    titleDiv.textContent = nama
    titleDiv.style.marginRight = "8px"

    // value 2
    const valueDiv = document.createElement("div");
    valueDiv.className = "h5 mb-0 font-weight-normal text-gray-800";
    valueDiv.textContent = id

    colDiv.appendChild(titleDiv);
    colDiv.appendChild(valueDiv);
    rowDiv.appendChild(colDiv);
    cardBodyDiv.appendChild(rowDiv);
    cardDiv.appendChild(cardBodyDiv);
    outerDiv.appendChild(cardDiv);

    curElement.appendChild(outerDiv);
}

$.ajax({
    type: "GET",
    url: "http://159.223.51.203/api/bio",
    dataType: "json",
    crossDomain: true,
    success: function (response) {
        // console.log(response)
        for (let index = 0; index < 11; index++) {
            var nama = response[index].name
            var id = response[index].id
            createCard(nama, id);
        }
    },
});

