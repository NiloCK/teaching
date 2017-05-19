var countBys = [3, 7];
var questions = [];

for (var i = 0; i < 5; i++) {
    questions.push(new Question(i));
    // document.body.appendChild(q.dom);
}

setTimeout(function () {
    document.body.appendChild(questions[0].getDom());
    // for (var i = 0; i < questions.length; i++) {

    //     document.body.appendChild(questions[i].getDom());
    // }
}, 1000);

function Question(id) {
    this.id = id;
    this.a = randDigit();
    this.b = countBys[getRandomInt(0, countBys.length - 1)];

    this.getDom = function () {
        if (this.dom) {
            return this.dom;
        }

        this.startTime = new Date();
        var ret = document.createElement('div');
        ret.classList = "question complete";
        var multStatement = document.createElement('div');
        multStatement.innerHTML = this.a + '&nbsp;&times;&nbsp;' + this.b + "&nbsp;=&nbsp;";
        multStatement.style.display = "inline";
        ret.appendChild(multStatement);

        var form = document.createElement('form');
        form.style.display = "inline";
        var input = document.createElement('input');
        input.type = 'number';
        input.autocomplete = 'off';
        input.style.display = "inline";
        input.id = 'q' + this.id;
        input.focus();
        form.appendChild(input);
        var submit = document.createElement('button');
        submit.id = 's' + this.id;
        submit.innerHTML = 'Submit';
        form.appendChild(submit);

        var corAns = this.a * this.b;
        form.action = "javascript:void(0);";

        form.onsubmit = this.onAnswer.bind(this);

        ret.appendChild(form);
        ret.className = 'question';

        this.dom = ret;
        return ret;
    }
    // this.dom = this.getDom();
};

Question.prototype.onAnswer = function () {
    this.userAnswer = parseInt(document.getElementById('q' + this.id).value);

    if (this.userAnswer === this.a * this.b) {
        this.correct = true;

        // alert('yes!');
        this.getDom().style.backgroundColor = 'green';
        var submitBtn = document.getElementById('s' + this.id);
        submitBtn.parentNode.removeChild(submitBtn);
    }
    else {
        this.correct = false;
        // alert('no!');
        this.getDom().style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    }

    this.getDom().className = "question complete";
    //alert(this.getDom().classList);

    try {

        document.body.appendChild(questions[this.id + 1].getDom());
    } catch (e) {
        var reload = document.createElement('button');
        reload.innerHTML = "Try again!";
        reload.onclick = function () { location.reload() };
        document.body.appendChild(reload);
    }
};

function randDigit() {
    return getRandomInt(0, 10);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
