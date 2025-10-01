function openPopup(projectDiv) {
  const projectId = projectDiv.id;
  const overlay = document.getElementById("overlay-" + projectId);
  if (overlay) {
    overlay.style.height = "100%"; 
  }
}

function closePopup(closeBtn) {
  const overlay = closeBtn.closest(".overlay");
  if (overlay) {
    overlay.style.height = "0"; 
  }
}
