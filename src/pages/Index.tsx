import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = [
    { id: 'all', name: 'Все предметы', icon: 'BookOpen' },
    { id: 'math', name: 'Математика', icon: 'Calculator' },
    { id: 'physics', name: 'Физика', icon: 'Atom' },
    { id: 'chemistry', name: 'Химия', icon: 'FlaskConical' },
    { id: 'biology', name: 'Биология', icon: 'Microscope' },
    { id: 'programming', name: 'Программирование', icon: 'Code' },
    { id: 'languages', name: 'Языки', icon: 'Languages' },
  ];

  const mentors = [
    {
      id: 1,
      name: 'Анна Петрова',
      title: 'Доктор математических наук',
      subjects: ['Математика', 'Физика'],
      rating: 4.9,
      reviews: 127,
      experience: '8 лет',
      avatar: '/img/9e07272c-d18e-42f4-abf5-295a1622245a.jpg',
      description: 'Опытный преподаватель с индивидуальным подходом к каждому студенту',
      specialization: 'Высшая математика, Алгебра, Геометрия'
    },
    {
      id: 2,
      name: 'Михаил Смирнов',
      title: 'Senior Developer',
      subjects: ['Программирование', 'Алгоритмы'],
      rating: 4.8,
      reviews: 89,
      experience: '5 лет',
      avatar: '/img/9e07272c-d18e-42f4-abf5-295a1622245a.jpg',
      description: 'Практикующий разработчик, помогу освоить современные технологии',
      specialization: 'JavaScript, React, Python'
    },
    {
      id: 3,
      name: 'Елена Козлова',
      title: 'Кандидат химических наук',
      subjects: ['Химия', 'Биология'],
      rating: 4.9,
      reviews: 156,
      experience: '12 лет',
      avatar: '/img/9e07272c-d18e-42f4-abf5-295a1622245a.jpg',
      description: 'Доступно объясню сложные концепции и помогу с подготовкой к экзаменам',
      specialization: 'Органическая химия, Биохимия'
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSubject = selectedSubject === 'all' || 
                          mentor.subjects.some(subject => 
                            subject.toLowerCase().includes(subjects.find(s => s.id === selectedSubject)?.name.toLowerCase() || '')
                          );
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MentorHub</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 font-medium">Главная</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Предметы</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Помощь</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Профиль</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Чат</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline">Войти</Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700">Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Найди своего наставника
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Бесплатное персональное обучение с лучшими преподавателями и экспертами
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Поиск по предмету или имени ментора..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 text-lg bg-white text-gray-900"
                  />
                </div>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 h-12 px-8">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти ментора
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="mentors" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mentors">Менторы</TabsTrigger>
            <TabsTrigger value="subjects">Предметы</TabsTrigger>
            <TabsTrigger value="calendar">Календарь</TabsTrigger>
          </TabsList>

          <TabsContent value="mentors" className="space-y-8">
            {/* Subject Filters */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Предметы</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {subjects.map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      selectedSubject === subject.id
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <Icon name={subject.icon as any} size={24} className="mx-auto mb-2" />
                    <div className="text-sm font-medium">{subject.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{mentor.name}</CardTitle>
                        <CardDescription className="text-sm">{mentor.title}</CardDescription>
                        <div className="flex items-center mt-2">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                          <span className="text-sm font-medium ml-1">{mentor.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({mentor.reviews} отзывов)</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">{mentor.description}</p>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Специализация:</div>
                      <div className="text-sm text-gray-600">{mentor.specialization}</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {mentor.subjects.map((subject) => (
                        <Badge key={subject} variant="secondary">{subject}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-lg font-bold text-green-600">Бесплатно</div>
                        <div className="text-sm text-gray-500">Опыт: {mentor.experience}</div>
                      </div>
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        Записаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.slice(1).map((subject) => (
                <Card key={subject.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center pb-3">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon name={subject.icon as any} size={32} className="text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl">{subject.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">
                      Найдите лучших менторов по {subject.name.toLowerCase()}
                    </p>
                    <Button variant="outline" className="w-full">
                      Смотреть менторов
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Выберите дату</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Доступное время</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="grid grid-cols-2 gap-3">
                    {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map((time) => (
                      <Button key={time} variant="outline" className="h-12">
                        {time}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-medium mb-3">Предстоящие консультации</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Icon name="Clock" size={16} className="text-gray-500" />
                        <div>
                          <div className="font-medium">Математика с Анной Петровой</div>
                          <div className="text-sm text-gray-500">Завтра в 15:00</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Icon name="Clock" size={16} className="text-gray-500" />
                        <div>
                          <div className="font-medium">Программирование с Михаилом Смирновым</div>
                          <div className="text-sm text-gray-500">Пятница в 17:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Statistics Section */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">500+</div>
              <div className="text-gray-600">Менторов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">10,000+</div>
              <div className="text-gray-600">Студентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">25+</div>
              <div className="text-gray-600">Предметов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">4.9</div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

export default Index;