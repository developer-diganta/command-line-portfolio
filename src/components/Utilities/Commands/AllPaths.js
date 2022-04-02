const paths = ["..", "about", "experience", "projects", "contact", "skills"];

function checkIfPathExists(path) {
  if (paths.includes(path)) {
    return true;
  } else {
    return false;
  }
}

export default checkIfPathExists;