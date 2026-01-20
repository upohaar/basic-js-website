const nameContainer = document.getElementById('name-container'); // নামের তালিকা
const inputNameField = document.getElementById('input-name');      // নামের ইনপুট বক্স
const btnNameAdd = document.getElementById('btn-name');           // নামের অ্যাড বাটন

// ২. নতুন নাম যোগ করার ফাংশন
btnNameAdd.addEventListener('click', function() {
    const newName = inputNameField.value;

    // ভ্যালিডেশন
    if (newName === "") {
        alert("দয়া করে একটি নাম লিখুন!");
        return;
    }

    // নতুন li তৈরি এবং অ্যাড করা
    const newLi = document.createElement('li');
    newLi.innerText = newName;
    nameContainer.appendChild(newLi);

    // ইনপুট বক্স ক্লিয়ার করা
    inputNameField.value = "";
});

// ৩. আইটেম ডিলিট করার ফাংশন (Event Delegation)
nameContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const isConfirmed = confirm("আপনি কি '" + event.target.innerText + "' ডিলিট করতে চান?");
        if (isConfirmed) {
            event.target.remove();
        }
    }
});