module.exports = function(pathToSiteData, newData) {
  const siteData = require(pathToSiteData);
  let totalledScores = [];
  let highScore;
  let matchIndex;
  let matchedFriend;

  //loop through siteData and compare each friend's score with new user's score
  siteData.forEach(function(item, index) {
    let scoresSummed = [];

    item.scores.forEach(function(item, index){
      let score = item - newData.scores[index];

      if( Math.sign(score) === -1) score *= -1;
      scoresSummed.push(score);
    });

    let itemTotalScore = scoresSummed.reduce(function(a,b) {
      return a + b;
    });
    totalledScores.push(itemTotalScore);
  });

  //now we determine what the highest score was
  highScore = Math.max(...totalledScores);
  
  //now we find the index of the high score in totalledScores and that is our matched friend
  
  matchIndex = totalledScores.indexOf(highScore);
  matchedFriend = siteData[matchIndex];

  return matchedFriend;
}