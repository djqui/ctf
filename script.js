document.addEventListener('DOMContentLoaded', () => {
    let currentTask = 1;
    let correctAnswers = [];
  
    function updateProgress() {
      const progress = (correctAnswers.length / 5) * 100;
      document.getElementById('progress').style.width = progress + '%';
    }
  
    function loadTask(taskNumber) {
      const taskArea = document.getElementById('task-area');
      const task = document.getElementById('task' + taskNumber);
      if (task) {
        taskArea.innerHTML = '';
        task.style.display = 'block';
        taskArea.appendChild(task);
  
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
  
    function correct(resultId, nextTask) {
      const resultDiv = document.getElementById(resultId);
      resultDiv.textContent = 'Correct!';
      resultDiv.className = 'task-result success';
      resultDiv.style.display = 'block';
      correctAnswers.push(currentTask);
      updateProgress();
      if (nextTask === 'done') {
        setTimeout(() => {
          document.getElementById('task-area').style.display = 'none';
          document.getElementById('completion').style.display = 'block';
        }, 1500);
      } else {
        setTimeout(() => loadTask(nextTask), 1500);
      }
      currentTask++;
    }
  
    function wrong(resultId, message) {
      const resultDiv = document.getElementById(resultId);
      resultDiv.textContent = 'Wrong. ' + message;
      resultDiv.className = 'task-result error';
      resultDiv.style.display = 'block';
    }
  
    document.getElementById('submit1').addEventListener('click', () => {
      const answer = document.getElementById('answer1').value.trim().toLowerCase();
      if (answer.includes('terminal 4') || answer.includes('t4')) {
        correct('result1', 2);
      } else {
        wrong('result1', 'Think about the terminal she mentioned.');
      }
    });
  
    document.getElementById('submit2').addEventListener('click', () => {
      const answer = document.getElementById('answer2').value.trim().toLowerCase();
      if (answer.includes('jay') && answer.includes('maison')) {
        correct('result2', 3);
      } else {
        wrong('result2', 'Think about who met and where.');
      }
    });
  
    document.getElementById('submit3').addEventListener('click', () => {
      const answer = document.getElementById('answer3').value.trim().toLowerCase();
      if (answer === '@wander.explores.18') {
        correct('result3', 4);
      } else {
        wrong('result3', 'Look at the new posts carefully.');
      }
    });
  
    document.getElementById('submit4').addEventListener('click', () => {
      const answer = document.getElementById('answer4').value.trim().toLowerCase();
      if (answer.includes('jaipur')) {
        correct('result4', 5);
      } else {
        wrong('result4', 'Think about the Pink City clue.');
      }
    });
  
    document.getElementById('submit5').addEventListener('click', () => {
      const answer = document.getElementById('answer5').value.trim().toLowerCase();
      if (answer.includes('jay')) {
        correct('result5', 'done');
      } else {
        wrong('result5', 'Only one friend traveled.');
      }
    });
  
    loadTask(1);
  
    // Profile popup logic
    const profilePopup = document.getElementById('profilePopup');
    document.querySelectorAll('.profile-icon').forEach(icon => {
      icon.addEventListener('mouseenter', (e) => {
        const rect = icon.getBoundingClientRect();
        const displayName = icon.dataset.displayname;
        const username = icon.dataset.username;
        const bio = icon.dataset.bio;
  
        profilePopup.innerHTML = `
          <img src="${icon.src}" alt="Profile">
          <div><strong>${displayName}</strong></div>
          <div style="color:#657786;">${username}</div>
          <p style="margin-top:5px;font-size:14px;color:#555;">${bio}</p>
        `;
        profilePopup.style.top = `${rect.bottom + window.scrollY + 8}px`;
        profilePopup.style.left = `${rect.left + window.scrollX}px`;
        profilePopup.style.display = 'block';
      });
  
      icon.addEventListener('mouseleave', () => {
        setTimeout(() => {
          profilePopup.style.display = 'none';
        }, 200);
      });
    });
  
    profilePopup.addEventListener('mouseenter', () => {
      profilePopup.style.display = 'block';
    });
    profilePopup.addEventListener('mouseleave', () => {
      profilePopup.style.display = 'none';
    });
  
  });
  