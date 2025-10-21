// إضافة تأثيرات تفاعلية
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.semester-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // دالة لإغلاق جميع المواد
    function closeAllSubjects() {
        const allSubjects = document.querySelectorAll('.subjects-container');
        const allButtons = document.querySelectorAll('.btn');
        
        allSubjects.forEach(subject => {
            subject.classList.remove('show');
        });
        
        allButtons.forEach(button => {
            if (button.id.startsWith('show-semester')) {
                button.style.display = 'block';
            }
        });
    }
    
    // عرض مواد الترم الأول
    document.getElementById('show-semester1').addEventListener('click', function() {
        closeAllSubjects();
        const subjectsContainer = document.getElementById('semester1-subjects');
        subjectsContainer.classList.add('show');
        this.style.display = 'none';
    });
    
    // عرض مواد الترم الثاني
    document.getElementById('show-semester2').addEventListener('click', function() {
        closeAllSubjects();
        const subjectsContainer = document.getElementById('semester2-subjects');
        subjectsContainer.classList.add('show');
        this.style.display = 'none';
    });
    
    // تأثير تحميل الصفحة
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
    
    // تأثير اهتزاز خفيف للقطار
    const train = document.querySelector('.train');
    setInterval(() => {
        train.style.transform = 'translateY(-3px)';
        setTimeout(() => {
            train.style.transform = 'translateY(0)';
        }, 150);
    }, 3000);
});

// إخفاء قائمة المواد
function hideSubjects(containerId) {
    const container = document.getElementById(containerId);
    container.classList.remove('show');
    
    // إعادة عرض الزر بعد إخفاء القائمة
    setTimeout(() => {
        if (containerId === 'semester1-subjects') {
            document.getElementById('show-semester1').style.display = 'block';
        } else {
            document.getElementById('show-semester2').style.display = 'block';
        }
    }, 500);
}