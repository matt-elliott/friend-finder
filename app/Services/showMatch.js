module.exports = function(matchedFriend) {
  const popUp =`<aside id="matchPopUp" class="modal fade" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <header class="modal-header">
        <h4 class="modal-title">You Match With:</h4>
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
      </header>
      <div class="modal-body text-center">
        <h5>${matchedFriend.name}</h5>
        <figure>
          <img src="${matchedFriend.photo}" alt="Picture of ${matchedFriend.name}">
        </figure>
      </div>
    </div>
  </div>
  </aside>
  `;

  return popUp;
}