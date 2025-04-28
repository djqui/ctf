document.addEventListener('DOMContentLoaded', () => {
    let currentTask = 1;
    let correctAnswers = [];
  
    function updateProgress() {
      const progress = (correctAnswers.length / 4) * 100;
      document.getElementById('progress').style.width = progress + '%';
    }
  
    function loadTask(taskNumber) {
      const taskArea = document.getElementById('task-area');
      const task = document.getElementById('task' + taskNumber);
      if (task) {
        taskArea.innerHTML = '';
        task.style.display = 'block';
        taskArea.appendChild(task);
  
        // Attach hint button functionality dynamically
        const hintButton = task.querySelector('.hint-button');
        if (hintButton) {
          hintButton.addEventListener('click', () => {
            const hint = task.querySelector('.hint');
            if (hint) {
              hint.style.display = hint.style.display === 'block' ? 'none' : 'block';
            }
          });
        }
      }
    }
  
    // Task 1
    document.getElementById('submit1').addEventListener('click', () => {
      const answer = document.getElementById('answer1').value.trim().toLowerCase();
      const resultDiv = document.getElementById('result1');
      if (answer === 'terminal 4' || answer === 't4') {
        resultDiv.textContent = 'Correct!';
        resultDiv.className = 'task-result success';
        resultDiv.style.display = 'block';
        correctAnswers.push(1);
        updateProgress();
        setTimeout(() => loadTask(2), 1500);
      } else {
        resultDiv.textContent = 'Wrong. Think about airport terminals!';
        resultDiv.className = 'task-result error';
        resultDiv.style.display = 'block';
      }
    });
  
    // Task 2
    document.getElementById('submit2').addEventListener('click', () => {
      const answer = document.getElementById('answer2').value.trim().toLowerCase();
      const resultDiv = document.getElementById('result2');
      if (answer.includes('maison')) {
        resultDiv.textContent = 'Correct!';
        resultDiv.className = 'task-result success';
        resultDiv.style.display = 'block';
        correctAnswers.push(2);
        updateProgress();
        setTimeout(() => loadTask(3), 1500);
      } else {
        resultDiv.textContent = 'Incorrect. Double-check Jay\'s blog.';
        resultDiv.className = 'task-result error';
        resultDiv.style.display = 'block';
      }
    });
  
    // Task 3
    document.getElementById('submit3').addEventListener('click', () => {
      const answer = document.getElementById('answer3').value.trim().toLowerCase();
      const resultDiv = document.getElementById('result3');
      if (answer === '@wander.explores.18') {
        resultDiv.textContent = 'Correct! You found the right alt.';
        resultDiv.className = 'task-result success';
        resultDiv.style.display = 'block';
        correctAnswers.push(3);
        updateProgress();
        setTimeout(() => loadTask(4), 1500);
      } else {
        resultDiv.textContent = 'Not correct. Look again at the posts.';
        resultDiv.className = 'task-result error';
        resultDiv.style.display = 'block';
      }
    });
  
    // Task 4
    document.getElementById('submit4').addEventListener('click', () => {
      const answer = document.getElementById('answer4').value.trim().toLowerCase();
      const resultDiv = document.getElementById('result4');
      if (answer === 'jaipur') {
        resultDiv.textContent = 'Correct! Case solved!';
        resultDiv.className = 'task-result success';
        resultDiv.style.display = 'block';
        correctAnswers.push(4);
        updateProgress();
        setTimeout(() => {
          document.getElementById('task-area').style.display = 'none';
          document.getElementById('completion').style.display = 'block';
          // Removed window.scrollTo to prevent scrolling to the bottom
        }, 1500);
      } else {
        resultDiv.textContent = 'Wrong. Remember the Pink City?';
        resultDiv.className = 'task-result error';
        resultDiv.style.display = 'block';
      }
    });
  
    // Start with first task
    loadTask(1);
  });
