
const Border = (col, res) => {
    const bord = (res) => {
      if (res) {
        return 'solid';
      }
      return 'dashed';
    };
    document.getElementById('divs').style.border = `3px ${bord} ${col}`;
  };
const GetEnd = (endP, col) => {
  return new Promise((resolve, reject) => {
    fetch(endP)
      .then(response => {
        if (response.ok) {
          resolve(col);
        } else {
          reject(col);
        }
      }).catch(error => reject(col));});
};



Promise.allSettled([
  GetEnd('/endpoint1', 'yellow'),GetEnd('/endpoint2', 'blue'),GetEnd('/endpoint3', 'red')
])
.then(results => {
  results.forEach(result => {
    if (result.status && result.status === 'fulfilled') {
      Border(result.value, true);
    } else {
      Border(result.reason, false);
    }
  });
});
