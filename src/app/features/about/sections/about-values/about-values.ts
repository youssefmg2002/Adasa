import { Component } from '@angular/core';

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-values',
  templateUrl: './about-values.html',
})
export class AboutValues {
  protected readonly values: ValueItem[] = [
    { icon: 'fa-bullseye', title: 'الجودة أولاً', description: 'محتوى مدروس ومكتوب بخبرة' },
    { icon: 'fa-bolt', title: 'تركيز عملي', description: 'أمثلة واقعية يمكنك تطبيقها اليوم' },
    { icon: 'fa-handshake', title: 'المجتمع', description: 'تعلم مع آلاف المصورين' },
    { icon: 'fa-arrows-rotate', title: 'دائماً محدث', description: 'أحدث الاتجاهات وأفضل الممارسات' },
  ];
}
