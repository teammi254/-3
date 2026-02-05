function submitReview() {
    const rating = document.getElementById('newRating').value;
    const comment = document.getElementById('newComment').value;

    if (comment.trim() === "") {
        alert("กรุณาเขียนรีวิวสักหน่อยนะครับ");
        return;
    }

    // ลบข้อความ "ยังไม่มีรีวิว" ถ้ามี
    const emptyMsg = document.getElementById('emptyMsg');
    if (emptyMsg) emptyMsg.remove();

    const reviewHTML = `
        <div class="bg-gray-50 p-4 rounded-lg border border-gray-100 animate-fade-in-down mb-4">
            <div class="flex items-start gap-3">
                <img src="https://ui-avatars.com/api/?name=User&background=random" class="w-10 h-10 rounded-full">
                <div class="flex-1">
                    <div class="flex justify-between"><h4 class="font-bold text-sm">คุณ (User)</h4><span class="text-xs text-gray-400">เมื่อสักครู่</span></div>
                    <div class="text-yellow-400 text-xs my-1">
                        ${'<i class="fas fa-star"></i>'.repeat(rating)}${'<i class="far fa-star"></i>'.repeat(5 - rating)}
                    </div>
                    <p class="text-sm text-gray-700">${comment}</p>
                </div>
            </div>
        </div>
    `;

    const container = document.getElementById('reviewContainer');
    container.insertAdjacentHTML('afterbegin', reviewHTML);

    document.getElementById('newComment').value = "";
    toggleModal();
}


