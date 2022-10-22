# Twoj Somsiad


## Menu
* [Ogólne informacje](#ogólne-informacje)
* [Technologie](#technologie)
* [Podstrony](#podstrony)

## Ogólne informacje
Twoj Somsiad to zarejestrowana pod domeną .ml aplikacja internetowa, posiadająca w pełni funkcjonalny front-end i back-end.
Skierowana jest ona do dobrowolnych wolontariuszy i osób potrzebujących różnego rodzaju pomocy.
Idea pomocy sąsiedzkiej nie jest nowa jednak Twoj Somsiad przenosi ta kwestię na nowy poziom.
Za pomocą technologii informatycznych łączymy ich razem usprawniając proces pomagania innym.
	
## Technologie 
* React
* Vite
* Syntactically Awesome Style Sheets
* HTML5
	
## Podstrony
Aplikacja zawiera następujące podstrony:


### Strona główna
Na stronie głównej znajdują się ogłoszenia wystawiane przez użytkowników naszej aplikacji. Każde zawiera opis, datę zgłoszenia,
tytuł, datę wykonania i są powiązane z osobami je wystawiającymi. W oknie ogłoszenia w formie karty widzimy również
losowo generowany portret ogłaszającego. Pobierane są one z serwera, a strona automaycznie dostosowuje swoją długość co do
ich liczby. Po lewej stronie wyświetla się boczny pasek nawigacji, który posiada przyciski przekierowujące do wszystkich podstron poza 404.
Pasek ten wyświetla się nie tylko na stronie głównej, lecz też na panelu ogłoszeń i profilu użytkownika.

### Panel ogłoszeń
Na panelu ogłoszeń za pomocą formularza użytkownik ma możliwość utworzenia ogłoszeń. Formularz ten składa się z pól: tytuł ogłoszenia,
wybór miasta z dostępnych: Warszawa, Kraków i Nowy Sącz, wybór daty kiedy użytkownik będzie potrzebował pomocy
wolontariusza oraz opis potrzeby użytkownika. Wyświetlą się one na stronie głównej regionu wybranego w aplikacji.
Dodatkową funkcją panelu jest też wyświetlenie ogłoszeń, do których użytkownik się zgłosił.

### Logowanie
Na tej podstronie na pierwszy rzut oka widzimy ikonę logowania w formie zielonej kłódki. Poniżej znajduje się formularz umożliwiający zalogowanie
użytkownika do serwisu. Znajdują się w nim 2 pola: email i hasło, przy czym w przypadku pola do adresu email dochodzi do walidacji
poprawnej formy podanego emaila przed wysłaniem danych do backendu. W przypadku jego nieprawidłowości zapytanie nie przesyła się, a
użytkownik widzi podświetlone na czerwono pole z komunikatem o niepoprawności wpisanych przez niego danych.

### Rejestracja
Na tej podstronie wyświetla się formularz służący do zarejestrowania użytkownika w aplikacji.
Posiada pięć pól: imię, nazwisko, pseudonim, email i hasło. Pole email posiada walidację poprawności zapisu, 
która blokuje dalsze procedury rejestracji (przesłanie danych na backend). Wyświetla się wtedy czerwony napis pod polem email.

### Profil
Na tej podstronie znajdują się informacje na temat użytkownika, który jest w tym momencie zalogowany.
Wyświetla się jego: imię, nazwisko, email, region i ilość punktów.

### 404
Jest to podstrona ukazująca się użytkownikowi w momencie kiedy ten będzie chciał przejść na adres url, którego nie ma w
naszej aplikacji. Dostrzec tutaj możemy obrazek z napisem 404 z klocków LEGO, tytuł 404, dopis szukaj dalej (odnoszący się
do tego że należy poszukać istniejącej strony) oraz przycisk do powrotu na stronę główną serwisu TwojSomsiad.