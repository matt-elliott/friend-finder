module.exports = function(matchedFriend) {
  const popUp =`<aside id="matchPopUp" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <header class="modal-header">
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
        <h4 class="modal-title">You Match With:</h4>
      </header>
      <div class="modal-body">
        <h5>${matchedFriend.name}</h5>
        <figure>
          <img src="${matchedFriend.photo}" alt="Picture of ${matchedFriend.name}">
        </figure>
      </div>
      <div class="modal-footer">
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
    </div>
  </div>
  </aside>
  `;

  return popUp;
}