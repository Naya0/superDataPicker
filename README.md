**SuperDataPicker** 


## Основные технологии

- **React 19** — библиотека для построения UI.
- **TypeScript 5.8** — статическая типизация для надежного кода.
- **Vite 7** — быстрый инструмент сборки и разработки.



## Установка

Клонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/Naya0/superDataPicker.git
cd superdatapicker
npm install

```


## Параметры 

| Проп                     | Тип      | Описание                                    | Значение по умолчанию |
| ------------------------ | -------- | ------------------------------------------- | --------------------- |
| `isSundayFirst`          | boolean  | Воскресенье первый день недели              | false                 |
| `monthsListIsVisible`    | boolean  | Закреплён ли список месяцев                 | true                  |
| `yearsListIsVisible`     | boolean  | Закреплён ли список годов                   | true                  |
| `twoDates`               | boolean  | Использовать 2 поля дат                     | false                 |
| `dataListTitlesMonth`    | array    | Список месяцев (при необходимости)          | —                     |
| `dataListTitlesWeekdays` | array    | Список дней недели (при необходимости)      | —                     |
| `theme`                  | string   | Цветовая тема (`dark` или `light`)          | dark                  |
| `fastDayName`            | array    | Список ближайших дней                       | —                     |
| `getDate`                | function | Callback-функция для возврата выбранных дат | —                     |

## Пример использования 


```tsx
<SuperDataPicker
  isSundayFirst={true}
  monthsListIsVisible={true}
  yearsListIsVisible={true}
  twoDates={false}
  dataListTitlesMonth={['Январь','Февраль','Март']}
  dataListTitlesWeekdays={['Пн','Вт','Ср','Чт','Пт','Сб','Вс']}
  theme="dark"
  fastDayName={['Сегодня','Завтра','Послезавтра']}
  getDate={(dates) => console.log(dates)}
/>
```