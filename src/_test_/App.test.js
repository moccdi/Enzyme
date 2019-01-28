//.toMatchSnapshot(propertyMatchers, snapshotName)
//.toMatchInlineSnapshot(propertyMatchers, inlineSnapshot) Обеспечивает соответствие значения последнему снимку. В отличие от .toMatchSnapshot()этого моментальные снимки будут записаны в текущий исходный файл inline.
//import serializer from 'my-serializer-module';
//expect.addSnapshotSerializer(serializer); который форматирует структуры данных конкретных приложений.

import React from 'react';
//import { expect } from 'chai';
import App from '../Component/App/App';
import Button from "../Component/Button/Button";
import Table from "../Component/Table/Table";
//import Table from "../Component/Table/Table";



//describe('first set', () => { //групировка
//beforeAll() Чтобы сделать что-то один раз перед запуском всех тестов, используйте beforeAll()функцию:
//beforeEach() Чтобы выполнить что-то перед каждым запуском теста, используйте beforeEach():
//afterEach(() => { }) Как и в случае с настройкой, вы можете выполнять что-то после каждого запуска теста:
//afterAll(() => {}) и после окончания всех испытаний:


//sum(1, 1)).toBe(2) +
//mul(1, 1)).toBe(1) *
//sub(1, 1)).toBe(0) -
//div(1, 1)).toBe(1) /

//toBe сравнивает строгое равенство, используя ===
//toEqual сравнивает значения двух переменных. Если это объект или массив, он проверяет равенство всех свойств или элементов
//toEqual для сравнения рекурсивно все свойства экземпляров объекта (также известные как «глубокое» равенство). Он вызывает Object.is сравнение примитивных значений, что даже лучше для тестирования, чем ===строгий оператор равенства.
//toEqual({one: 1, two: 2}); //проверка содержания обьекта
//expect(2 + 2).toBe(4);сколько должно быть математические операции
//toBeNull истина при передаче нулевого значения === null
//toBeDefined Значение true при передаче определенного значения (противоположно приведенному выше) == null 0
//toBeUndefined для проверки того, что переменная не определена. !== null 0
//toBeCloseTo используется для сравнения плавающих значений, избегая ошибок округления
//toBeCloseTo(0.3, 5); как .toBe только для нецелых цифр
//toBeTruthy true, если значение считается истинным (как это if делает)
//toBeTruthy(); соответствует любому if утверждению, считающемуся истиннымсоответствует любому if утверждению,
//toBeFalsy истина, если значение считается ложным (как и if делает)
//toBeFalsy(); соответствует тому, что if выражение обрабатывается как ложное
//toBeGreaterThan истина, если результат ожидаемого () выше чем аргумент >
//toBeGreaterThanOrEqual истина, если результат метода ожидаем () равен аргументу или превышает аргумент =>
//toBeLessThan истина, если результат ожидаемого () ниже чем аргумент <
//toBeLessThanOrEqual истина, если результат метода ожидаем () равен аргументу или ниже, чем аргумент =<
//toContain используется в массивах, true, если ожидаемый массив содержит аргумент в своем наборе элементов
//toContain('beer');  можете проверить, содержит ли массив определенный элемент, используя toContain:
//toHaveLength(number): проверяет длину массива
//toHaveLength(3); для проверки того, что объект имеет .length свойство и он установлен на определенное числовое значение.
//toHaveProperty(key, value): проверяет, есть ли у объекта свойство, и при необходимости проверяет его значение
//toThrow проверяет, выдает ли передаваемая вами функция исключение (в целом) или конкретное исключение
//expect(a + b).not.toBe(0); не должно быть математические операции
//expect('Christoph').toMatch(/stop/); найти строку(буквы подряд)
//done(); использование колбеком
//toBeInstanceOf(): проверяет, является ли объект экземпляром класса




//.toMatchObject(desiredHouse); проверка что все свойства обекта совподают типо с друим обектом в первом обекте может быть не все свойства но те которые уже есть должны совпадать
//.toHaveProperty чтобы проверить, существует ли свойство в предоставленной ссылке keyPathдля объекта.
//.toStrictEqual для проверки того, что объекты имеют одинаковые типы, а также структуру.

//mock.calls. Массив, содержащий аргументы вызова всех вызовов, которые были сделаны для этой функции mock. Каждый элемент массива представляет собой массив аргументов, которые были переданы во время вызова.
//mockFn.mock.results Массив, содержащий результаты всех вызовов, которые были сделаны для этой макетной функции.
//mockFn.mock.instances Массив, содержащий все экземпляры объектов, которые были созданы из этой макетной функции new.


//.exists сучествует expect(wrapper.find('.other-class').exists())
//.find найти
//.text()текст wrapper.find('.count').text();
//.get(0) возращает значение expect(wrapper.find(Foo).get(0).props().foo).to.equal('bar');
//.html() expect(wrapper.find(Foo).html()).to.equal('<div class="in-foo"></div>');
//.is Возвращает, соответствует ли текущий узел предоставленному селектору. is('.some-class')).to.equal(true);
//.isEmpty() Возвращает, пуст ли текущий узел.
//.key() expect(wrapper.at(0).key()).to.equal('foo');
//.state()
//type()
//.matchesElement(<button>Hello</button>)).to.equal(true);
//at(1) индекс класа типо какой поторения по счету а


//функции

//expect().toHaveBeenCalled(): проверить, была ли вызвана  функция
//expect().toHaveBeenCalledTimes(): подсчитать, сколько раз была вызвана функция
//expect().toHaveBeenCalledWith(): проверить, была ли вызвана функция с определенным набором параметров
//expect().toHaveBeenLastCalledWith(): проверить параметры последнего вызова функции

//mockFn.mock.calls
//.mock.calls.length).toBe(2); //вызов 2 раза функции дважди иза forEach
//.mock.calls[0][0]).toBe(0); //первый агрумент масив с индексом 0 и равен =  0
//.mock.results[0].value).toBe(42); возращает результат jest.fn(x => 42 + x);
//.mock.instances Массив, содержащий все экземпляры объектов, которые были созданы из этой фиктивной функции с помощью new.
//mockFn.mockClear() Сбрасывает всю информацию , хранящуюся в mockFn.mock.callsи mockFn.mock.instancesмассивах.
//mockFn.mockReset() елает, а также восстанавливает исходную (немодальную) реализацию.
//mockFn.mockName('mockedFunction')  value = функция
//jest.isMockFunction(fn) Определяет, является ли данная функция фиктивной.
//mockFunc.mock.calls.length).toBeGreaterThan(0); Фиктивная функция была вызвана хотя бы один раз
//mockFunc.mock.calls).toContain([arg1, arg2]);Пробная функция была вызвана хотя бы один раз с указанными аргументами
//mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([arg1, arg2,]); Последний вызов фиктивной функции был вызван с указанными аргументами
//mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42); Первый аргумент последнего вызова фиктивной функции был `42`
//callback).not.toBeCalled();На данный момент обратный вызов еще не должен был быть вызван
//jest.runAllTimers() Перемотка вперед, пока все таймеры не будут выполнены
//toThrow проверяет, выдает ли передаваемая вами функция исключение (в целом) или конкретное исключение


//expect.stringContaining(string) соответствует полученной строке, содержащей точную ожидаемую строку.соответствует полученной строке, содержащей точную ожидаемую строку.
//.toHaveBeenCalledWith чтобы гарантировать, что функция mock вызывается с определенными аргументами.
//.toHaveReturned(); для проверки того, что функция mock успешно вернулась (т. Е. Не выдавала ошибку) хотя бы один раз.
//.toHaveReturnedTimes(3); количество раз функция будет выпонлненна //чтобы гарантировать, что функция mock успешно вернулась (т. Е. Не выдавала ошибку
//.toHaveReturnedWith('La Croix') что вернула функция
//.toHaveLastReturnedWith('La Croix (Orange)'); проверяет последние значение что вернула функция
//.toHaveNthReturnedWith(1, 'La Croix (Lemon)');проверяет по номеру занчение возращение функции  .toHaveNthReturnedWith(2, 'La Croix (Orange)');
//.toBeGreaterThan(14); проверят что возращает функции больше > 14 в данній момент или другой цифры
//.toBeGreaterThanOrEqual(14); проверят что возращает функции больше или равно => 14 в данній момент или другой цифры
//.toBeLessThan(12); проверят что возращает функции меньше > 12 в данній момент или другой цифры
//.toBeLessThanOrEqual(12); проверят что возращает функции меньше или равно => 12 в данній момент или другой цифры



//Объект Jest
//jest.clearAllTimers() Удаляет все таймеры из системы таймеров.


// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index]);
//   }
// }
//


// const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 1], mockCallback);
// it('should render a App', () => {
//   expect(mockCallback.mock.calls.length).toBe(2); //вызов 2 раза функции дважди иза forEach
//   expect(mockCallback.mock.calls[0][0]).toBe(0); //первый агрумент масив с индексом 0 и равен =  0
//   expect(mockCallback.mock.calls[1][0]).toBe(1); //первый агрумент масив с индексом 1 и равен =  1
//   // The return value of the first call to the function was 42
//   expect(mockCallback.mock.results[0].value).toBe(42);
// });

// const mockFn = jest.fn();
// const a = new mockFn();
// const b = new mockFn();
// mockFn.mock.instances[0] === a; // true
// mockFn.mock.instances[1] === b; // true


// it('should render a App', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.find('.wrapper-table').childAt(0).type()).toEqual('button');
//     // expect(wrapper.state().tableCell).toEqual( [[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]);
//     // expect(wrapper.state().initialWidth).toEqual(4);
//     // expect(wrapper.state().initialHeight).toEqual(4);
//     // expect(wrapper.state().cellSize).toEqual(50);
//     // expect(wrapper.state().minusTopDisplay).toEqual(false);
//     // expect(wrapper.state().minusLeftDisplay).toEqual(false);
//     // expect(wrapper.state().minusTop).toEqual(5);
//     // expect(wrapper.state().minusLeft).toEqual(5);
//
// });

// it('should render a App', () => {
//    const wrapper = shallow(<App/>);
// //     expect(wrapper.find('.button-minus').every('button-minus_top')).toEqual(true);
// //     expect(wrapper.find('.button-minus').every('button-minus_top')).toEqual(true);
//        expect(wrapper.find(Table).html()).toEequal('<div class="in-foo"></div>');
// });

//const wrapper = shallow(<Counter />); создать тень
//     wrapper.find('.count').text(); // => "Count: 0" айти клас и найти текст класа
//     wrapper.find('.inc').simulate('click'); найти клас и сделать клилк
//.contains(<div className="unique"/>)).toEqual(true); проверить если ли елимент в


// it('should render a App', () => {
//     const wrapper = mount(<App/>);
//     //expect(wrapper.find('Table')).toHaveLength(4);
//     // expect(wrapper.find('.wrapper-table').childAt(0).hasClass('.button-minus button-minus_top')).toEqual(true);
//     expect(wrapper.contains(<div className="table"></div>)).toEqual(true);
// });


// const wrapper = shallow((
//     <div>
//         <div data-foo="foo" data-bar="bar">Hello</div>
//     </div>
// ));
//
// expect(wrapper.contains(<div data-foo="foo" data-bar="bar">Hello</div>)).to.equal(true);
//
// expect(wrapper.contains(<div data-foo="foo">Hello</div>)).to.equal(false);
// expect(wrapper.contains(<div data-foo="foo" data-bar="bar" data-baz="baz">Hello</div>)).to.equal(false);
// expect(wrapper.contains(<div data-foo="foo" data-bar="Hello">Hello</div>)).to.equal(false);
// expect(wrapper.contains(<div data-foo="foo" data-bar="bar" />)).to.equal(false);



// import React from 'react';
// //import { expect } from 'chai';
// import App from '../Component/App/App';
// import Button from "../Component/Button/Button";
//
// it('should render a document title', () => {
//     const wrapper = shallow(
//         <DocumentTitle title="Events" />
//     );
//     expect(wrapper.prop('title')).toEqual('Events');
// });
//
// it('should render a document title and a parent title', () => {
//     const wrapper = shallow(
//         <DocumentTitle title="Events" parent="Event Radar" />
//     );
//     expect(wrapper.prop('title')).toEqual('Events — Event Radar');
// });



// test('kindly asks if everything is alright', () => {
//     const wrapper = shallow((
//         <div>
//             <div data-foo="foo" data-bar="bar">Hello</div>
//         </div>
//     ));
//   expect(wrapper.contains(<div data-foo="foo" data-bar="bar">Hello</div>)).toEqual(true);
// })


    //.toHaveLength(3)
// const UnrealisticComponent = ({ onReply }) => (
//     <button onClick={() => onReply('Ja')}>Alles gut?</button>
// )
// const onReply = jest.fn();
// const wrapper = shallow(<UnrealisticComponent onReply={onReply} />)
//
// test('kindly asks if everything is alright', () => {
//     expect(wrapper.text()).toBe('Alles gut?')
// })

// test('receives positive response upon click', () => {
//     wrapper.find('button').simulate('click')
//     expect(onReply).toHaveBeenCalledWith('Ja')
// })

// const MyComponent = ({children}) =>(
//     <div>
//          <div className="foo">1</div>
//         <div className="bar"></div>
//         {children}
//     </div>
// );
// describe('<MyComponent />', () => {
//     it('renders children when passed in', () => {
//         const wrapper = shallow(<MyComponent />);
//         //expect(wrapper.contains(welcome)).toBe(true);
//         //expect(wrapper.contains(welcome)).toEqual(true);
//         //expect(wrapper.contains(<div className="unique"/>)).toEqual(true);
//         expect(wrapper.find('.foo')).to.have.lengthOf(1);
//     });
// });

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);
//     }
//
//     increment() {
//         this.setState(({ count }) => ({ count: count + 1 }));
//     }
//
//     decrement() {
//         this.setState(({ count }) => ({ count: count - 1 }));
//     }
//
//     render() {
//         const { count } = this.state;
//         return (
//             <div>
//                 <div className="count">Count: {count}</div>
//                 <button type="button" className="inc" onClick={this.increment}>Increment</button>
//                 <button type="button" className="dec" onClick={this.decrement}>Decrement</button>
//             </div>
//         );
//     }
// }
//
//
//
// test('should render a App', () => {
//     const wrapper = shallow(<Counter />);
//     wrapper.find('.count').text(); // => "Count: 0"
//     wrapper.find('.inc').simulate('click');
//     wrapper.find('.count').text(); // => "Count: 1"
//     wrapper.find('.inc').simulate('click');
//     wrapper.find('.count').text(); // => "Count: 2"
//     wrapper.find('.dec').simulate('click');
//     wrapper.find('.count').text(); // => "Count: 1"
// });




// test('should render a App', () => {
//     const wrapper = shallow(<Counter />);
//     wrapper.find('.count').text(); // => "Count: 0"
// });


// it('should render a document title', () => {
//     const wrapper = shallow(
//         <Button className="button-minus" />
//     );
//     expect(wrapper.prop('className')).toEqual('button-minus');
// });



// test('CheckboxWithLabel changes the text after click', () => {
//     //const wrapper = mount(<App/>);
//     expect(mount(<App />).find('block-table').toEqual(true));
//     //expect(mount(<App />).find('block-table').length).to.equal(1);
// })

// class Box extends React.Component {
//     render() {
//         const { children } = this.props;
//         return <div className="box">{children}</div>;
//     }
// }
//
// class Foo extends React.Component {
//     render() {
//         return (
//             <Box bam>
//                 <div className="div" />
//             </Box>
//         );
//     }
// }
//  test('CheckboxWithLabel changes the text after click', () => {
//      const wrapper = mount(<Foo/>);
//      wrapper.find(Box).children().debug();
//  })


// import React from 'react';
// import renderer from 'react-test-renderer';
//
//
// import Temperature from "../Temperature";

// it('renders correctly', () => {
//     const tree = renderer
//         .create(<Temperature temp={10} city="Toronto" toggleForecast={() => {}} />)
//         .toJSON();
//     expect(tree).toMatchSnapshot();
// });

// it("renders correctly", () => {
//     const wrapper = shallow(
//         <Temperature temp={10} city="Toronto" toggleForecast={() => {}} />
//     );
//
//     expect(wrapper).toMatchSnapshot();
// });



// import Foo from '../Foo';
// import { shallow, mount, render } from 'enzyme';


// describe("A suite", function() {
//     it("contains spec with an expectation", function() {
//         expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
//     });
//
//     it("contains spec with an expectation", function() {
//         expect(shallow(<Foo />).is('.foo')).to.equal(true);
//     });
//
//     // it("contains spec with an expectation", function() {
//     //     expect(mount(<Foo />).find('.foo').length).to.equal(1);
//     // });
// });


// test('CheckboxWithLabel changes the text after click', () => {
//     // Render a checkbox with label in the document
//     const checkbox = shallow(<Button classButton="button-minus button-minus_top" />);
//
//     // expect(checkbox.text()).toEqual('Off');
//     //
//     checkbox.find('button').simulate('change');
//     //
//     // expect(checkbox.text()).toEqual('On');
// });


// test('Link changes the class when hovered', () => {
//     const component = renderer.create(
//         <App></App>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });


// it('renders welcome message', () => {
//     const wrapper = shallow(<App />);
//     const welcome =    <div className="wrapper-table"></div>
//     expect(wrapper.contains(welcome)).toBe(true);
//    // expect(wrapper.contains(welcome)).toEqual(true);
// });


// it('renders without crashing', () => {
//     shallow(<App />);
// });



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('renders without crashing', () => {
//     shallow(<App />);
// });

// it('renders welcome message', () => {
//     const wrapper = shallow(<App />);
//     const welcome = <h2>Welcome to React</h2>;
//     // expect(wrapper.contains(welcome)).toBe(true);
//     expect(wrapper.contains(welcome)).toEqual(true);
// });

// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
// });

// const style = { fontSize: 13 };
// const wrapper = shallow((
//     <div>
//         <span className="foo">Hello</span>
//         <div style={style}>Goodbye</div>
//         <span>Again</span>
//     </div>
// ));
//
// expect(wrapper.containsAllMatchingElements([
//     <span>Hello</span>,
//     <div>Goodbye</div>,
// ])).to.equal(true);


// const mockFn = jest.fn();
//
// const a = new mockFn();
// const b = new mockFn();
//
// test('are not semantically the same', () => {
//         expect(mockFn.mock.instances[0] === a);
//         expect(mockFn.mock.instances[1] === b);
// });

// class LaCroix {
//     constructor(flavor) {
//         this.flavor = flavor;
//     }
// }
//
// describe('the La Croix cans on my desk', () => {
//     test('are not semantically the same', () => {
//         expect(new LaCroix('lemon')).toEqual({flavor: 'lemon'});
//         expect(new LaCroix('lemon')).not.toStrictEqual({flavor: 'lemon'});
//     });
// });

// // Object containing house features to be tested
// const houseForSale = {
//     bath: true,
//     bedrooms: 4,
//     kitchen: {
//         amenities: ['oven', 'stove', 'washer'],
//         area: 20,
//         wallColor: 'white',
//         'nice.oven': true,
//     },
//     'ceiling.height': 2,
// };
//
// test('this house has my desired features', () => {
//     // Simple Referencing
//     expect(houseForSale).toHaveProperty('bath');
//     expect(houseForSale).toHaveProperty('bedrooms', 4);
//
//     expect(houseForSale).not.toHaveProperty('pool');
//
//     // Deep referencing using dot notation
//     expect(houseForSale).toHaveProperty('kitchen.area', 20);
//     expect(houseForSale).toHaveProperty('kitchen.amenities', [
//         'oven',
//         'stove',
//         'washer',
//     ]);
//
//     expect(houseForSale).not.toHaveProperty('kitchen.open');
//
//     // Deep referencing using an array containing the keyPath
//     expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
//     expect(houseForSale).toHaveProperty(
//         ['kitchen', 'amenities'],
//         ['oven', 'stove', 'washer'],
//     );
//     expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
//     expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
//     expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);
//
//     // Referencing keys with dot in the key itself
//     //expect(houseForSale).toHaveProperty(['ceiling.height'], 'tall');
// });


// const houseForSale = {
//     bath: true,
//     bedrooms: 4,
//     kitchen: {
//         amenities: ['oven', 'stove', 'washer'],
//         area: 20,
//         wallColor: 'white',
//     },
// };
// const desiredHouse = {
//     bath: true,
//     kitchen: {
//         area: 20,
//         amenities: ['oven', 'stove', 'washer'],
//         wallColor: expect.stringMatching(/white|yellow/),
//     },
// };
//
// test('the house has my desired features', () => {
//     expect(houseForSale).toMatchObject(desiredHouse);
// });


// test('ounces per can is less than 20', () => {
//     expect([1, 2, 3]).toHaveLength(3);
//     expect('abc').toHaveLength(3);
//     expect('').not.toHaveLength(5);
// })

//this.isNot
//this.equals(a, b) Это функция глубокого равенства, которая вернется, trueесли два объекта имеют одинаковые значения (рекурсивно).
//expect.anything()  функция mock вызывается с ненулевым аргументом: , кроме nullили undefined
//expect.any(constructor)
//expect.arrayContaining(expected)  должен полностю совпадать//тут должны быть все елементы с перемнной  const expected = [1, 2, 3, 4, 5, 6];  expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual( expect.arrayContaining(expected),
//expect.arrayContaining(expected) должен полностю совпадать not.toEqual(expect.arrayContaining(expected), не должен полностю совпадать спеременной const expected = [1, 2, 3, 4, 5, 6];  expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual( expect.arrayContaining(expected),
//not.arrayContaining  == not.toEqual тоже самое что и прошлое

//resolves чтобы развернуть значение выполненного обещания  // test('resolves to lemon', () => { // make sure to add a return statement return expect(Promise.resolve('lemon')).resolves.toBe('lemon'); });



// function ouncesPerCan(){
//     return 12
// }
//
// test('ounces per can is less than 20', () => {
//     expect(ouncesPerCan()).toBeLessThan(12);
// });
//
// test('ounces per can is at most 12', () => {
//     expect(ouncesPerCan()).toBeLessThanOrEqual(12);
// });


// function ouncesPerCan(){
//     return 14
// }

// test('ounces per can is at least 12', () => {
//     expect(ouncesPerCan()).toBeGreaterThanOrEqual(14);
// });
//
// // function ouncesPerCan(){
// //     return 1
// // }
// //
// test('ounces per can is more than 10', () => {
//     expect(ouncesPerCan()).toBeGreaterThan(14);
// });

// test('drink returns expected nth calls', () => {
//     const beverage1 = {name: 'La Croix (Lemon)'};
//     const beverage2 = {name: 'La Croix (Orange)'};
//     const drink = jest.fn(beverage => beverage.name);
//
//     drink(beverage1);
//     drink(beverage2);
//
//     expect(drink).toHaveNthReturnedWith(1, 'La Croix (Lemon)');
//     expect(drink).toHaveNthReturnedWith(2, 'La Croix (Orange)');
// });

// test('drink returns La Croix (Orange) last', () => {
//     const beverage1 = {name: 'La Croix (Lemon)'};
//     const beverage2 = {name: 'La Croix (Orange)'};
//     const drink = jest.fn(beverage => beverage.name);
//
//     drink(beverage1);
//     drink(beverage2);
//
//     expect(drink).toHaveLastReturnedWith('La Croix (Orange)');
// });


// test('drinks returns', () => {
//     const drink = jest.fn(() => true);
//
//     drink();
//
//     expect(drink).toHaveReturned();
// });

// test('drink returns twice', () => {
//     const drink = jest.fn(() => true);
//
//     drink();
//     drink();
//     drink();
//
//     expect(drink).toHaveReturnedTimes(3);
// });

// test('drink returns La Croix', () => {
//     const beverage = {name: 'La Croix'};
//     const drink = jest.fn(beverage => beverage.name);
//
//     drink(beverage);
//
//     expect(drink).toHaveReturnedWith('La Croix');
// });

// describe('drinkAll', () => {
//     test('drinks something lemon-flavored', () => {
//         const drink = jest.fn();
//         drinkAll(drink, 'lemon');
//         expect(drink).toHaveBeenCalled();
//     });
//
//     test('does not drink something octopus-flavored', () => {
//         const drink = jest.fn();
//         drinkAll(drink, 'octopus');
//         expect(drink).not.toHaveBeenCalled();
//     });
// });



// test('rejects to octopus', () => {
//     // make sure to add a return statement
//     return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
//         'octopus',
//     );
// });


// test('resolves to lemon', () => {
//     // make sure to add a return statement
//     return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
// });


//const can1 = {
//     flavor: 'grapefruit',
//     ounces: 12,
// };
// const can2 = {
//     flavor: 'grapefruit',
//     ounces: 12,
// };
//
// describe('the La Croix cans on my desk', () => {
//     test('have all the same properties', () => {
//         expect(can1).toEqual(can2);
//     });
//     test('are not the exact same can', () => {
//         expect(can1).toBe(can2);
//     });
// });


// test('onPress gets called with the right thing', () => {
//     const onPress = {
//         x:32,
//         y: 2,
//     }
//     //simulatePresses(onPress);
//     expect(onPress).toEqual(
//         expect.objectContaining({
//             x: expect.any(Number),
//             y: expect.any(Number),
//         }),
//     );
// });



// describe('not.arrayContaining', () => {
//     const expected = ['Samantha'];
//
//     it('matches if the actual array does not contain the expected elements', () => {
//         expect(['Alice', 'Bob', 'Eve']).toEqual(
//             expect.not.arrayContaining(expected),
//         );
//     });
// });

// describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
//     const expected = [1, 2, 3, 4, 5, 6];
//     it('matches even with an unexpected number 7', () => {
//         expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
//             expect.arrayContaining(expected),
//         );
//     });
//     it('does not match without an expected number 2', () => {
//         expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
//             expect.arrayContaining(expected),
//         );
//     });
// });

// describe('arrayContaining', () => {
//     const expected = ['Alice', 'Bob'];
//     it('matches even if received contains additional elements', () => {
//         expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
//     });
//     it('does not match if received does not contain expected elements', () => {
//         expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
//     });
// });

// function randocall(fn) {
//     return fn(Math.floor(Math.random() * 6 + 1));
// }
//
// test('randocall calls its callback with a number', () => {
//     const mock = jest.fn();
//     randocall(mock);
//     expect(mock).toBeCalledWith(expect.any(Number));
// });



// test('map calls its argument with a non-null argument', () => {
//     const mock = jest.fn();
//     [1].map(x => mock(x));
//     expect(mock).toBeCalledWith(expect.anything());
// });

// describe('not.stringContaining', () => {
//     const expected = 'Hello world!';
//
//     it('matches if the actual string does not contain the expected substring', () => {
//         expect('How are you?').toEqual(expect.not.stringContaining(expected));
//     });
// });

// const {toMatchSnapshot} = require('jest-snapshot');
//
// expect.extend({
//     toMatchTrimmedSnapshot(received, length) {
//         return toMatchSnapshot.call(
//             this,
//             received.substring(0, length),
//             'toMatchTrimmedSnapshot',
//         );
//     },
// });
//
// it('stores only 10 characters', () => {
//     expect('extra long string oh my gerd').toMatchTrimmedSnapshot(10);
// });

// expect.extend({
//     toBeWithinRange(received, floor, ceiling) {
//         const pass = received >= floor && received <= ceiling;
//         if (pass) {
//             return {
//                 message: () =>
//                     `expected ${received} not to be within range ${floor} - ${ceiling}`,
//                 pass: true,
//             };
//         } else {
//             return {
//                 message: () =>
//                     `expected ${received} to be within range ${floor} - ${ceiling}`,
//                 pass: false,
//             };
//         }
//     },
// });
//
// test('numeric ranges', () => {
//     expect(100).toBeWithinRange(90, 110);
//     expect(101).not.toBeWithinRange(0, 100);
//     expect({apples: 6, bananas: 3}).toEqual({
//         apples: expect.toBeWithinRange(1, 10),
//         bananas: expect.not.toBeWithinRange(11, 20),
//     });
// });


// test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
//     '.add(%i, %i)',
//     (a, b, expected) => {
//         expect(a + b).toBe(expected);
//     },
// );


// const myBeverage = {
//     delicious: true,
//     sour: false,
// };
//
// describe('my beverage', () => {
//     test('is delicious', () => {
//         expect(myBeverage.delicious).toBeTruthy();
//     });
//
//     test('is not sour', () => {
//         expect(myBeverage.sour).toBeFalsy();
//     });
// });

// import React from 'react';
// import {shallow} from 'enzyme';
// import CheckboxWithLabel from './CheckboxWithLabel';
//
// test('CheckboxWithLabel changes the text after click', () => {
//     // Render a checkbox with label in the document
//     const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
//
//     expect(checkbox.text()).toEqual('Off');
//
//     checkbox.find('input').simulate('change');
//
//     expect(checkbox.text()).toEqual('On');
// });

// it('will check the matchers and pass', () => {
//     const user = {
//         createdAt: new Date(),
//         id: Math.floor(Math.random() * 20),
//         name: 'LeBron James',
//     };
//
//     expect(user).toMatchSnapshot({
//         createdAt: expect.any(Date),
//         id: expect.any(Number),
//     });
// });

// it('will fail every time', () => {
//     const user = {
//         createdAt: new Date(),
//         id: Math.floor(Math.random() * 20),
//         name: 'LeBron James',
//     };
//
//     expect(user).toMatchSnapshot({});
// });

// import React from "react";
// import Link from "./Link2";
// import renderer from "react-test-renderer";
//
// it('renders correctly', () => {
//     const tree = renderer
//         .create(<Link page="https://prettier.io">Prettier</Link>)
//         .toJSON();
//     expect(tree).toMatchInlineSnapshot();
// });

// import React from 'react';
// import Link from './Link2';
// import renderer from 'react-test-renderer';
//
// it('renders correctly', () => {
//     const tree = renderer
//         .create(<Link page="http://www.facebook.com">Facebook</Link>)
//         .toJSON();
//     expect(tree).toMatchSnapshot();
// });
//
// import React from 'react';
// import Link from './Link2';
// import renderer from 'react-test-renderer';
//
// test('Link changes the class when hovered', () => {
//     const component = renderer.create(
//         <Link page="http://www.facebook.com">Facebook</Link>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//
//     // manually trigger the callback
//     tree.props.onMouseEnter();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//
//     // manually trigger the callback
//     tree.props.onMouseLeave();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });



// const myMock = jest.fn();
//
// const a = new myMock();
// const b = {};
// const bound = myMock.bind(b);
// bound();
// test( 'compiling android goes as expected', () => {
//     expect( myMock.mock.instances);
// })

// > [ <a>, <b> ]

// function forEach(items, callback) {
//     for (let index = 0; index < items.length; index++) {
//         callback(items[index]);
//     }
// }
//
// const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 6], mockCallback);
//
// test( 'compiling android goes as expected', () => {
// // The mock function is called twice
//     expect(mockCallback.mock.calls.length).toBe(2);
//
// // The first argument of the first call to the function was 0
//     expect(mockCallback.mock.calls[0][0]).toBe(0);
//
// // The first argument of the second call to the function was 1
//     expect(mockCallback.mock.calls[1][0]).toBe(6);
//
// // The return value of the first call to the function was 42
//     expect(mockCallback.mock.results[0].value).toBe(42);
// })

// // The function was called exactly once
// expect(someMockFunction.mock.calls.length).toBe(1);
//
// // The first arg of the first call to the function was 'first arg'
// expect(someMockFunction.mock.calls[0][0]).toBe('first arg');
//
// // The second arg of the first call to the function was 'second arg'
// expect(someMockFunction.mock.calls[0][1]).toBe('second arg');
//
// // The return value of the first call to the function was 'return value'
// expect(someMockFunction.mock.results[0].value).toBe('return value');
//
// // This function was instantiated exactly twice
// expect(someMockFunction.mock.instances.length).toBe(2);
//
// // The object returned by the first instantiation of this function
// // had a `name` property whose value was set to 'test'
// expect(someMockFunction.mock.instances[0].name).toEqual('test');

// beforeEach(() => {
//     initializeCityDatabase();
// });
//
// afterEach(() => {
//     clearCityDatabase();
// });
//
// test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
// });
//
// test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
// });

// test('the data is peanut butter', async () => {
//     expect.assertions(1);
//     await expect(fetchData()).resolves.toBe('peanut butter');
// });
//
// test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     await expect(fetchData()).rejects.toMatch('error');
// });

// test('the data is peanut butter', () => {
//     expect.assertions(1);
//     return fetchData().catch(e => expect(e).toMatch('error'));
// });

// function fetchData(callback2){
//     callback2(2)
// }
// test('the data is peanut butter', done => {
//     function callback(a) {
//         expect(a).toBe(2);
//         done();
//     }
//
//     fetchData(callback);
// });

// function compileAndroidCode() {
//     throw new ConfigError('you are using the wrong JDK');
// }
//
// test('compiling android goes as expected', () => {
//     expect(compileAndroidCode).toThrow();
//    expect(compileAndroidCode).toThrow(ConfigError);
//
//     // You can also use the exact error message or a regexp
//     expect(compileAndroidCode).toThrow('you are using the wrong JDK');
//     expect(compileAndroidCode).toThrow(/JDK/);
// });

// const shoppingList = [
//     'diapers',
//     'kleenex',
//     'trash bags',
//     'paper towels',
//     'beer',
// ];
// test('the shopping list has beer on it', () => {
//     expect(shoppingList).toContain('beer');
// });

// test('there is no I in team', () => {
//     expect('team').not.toMatch(/I/);
// });
//
// test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/);
// });

// test('two plus two', () => {
//     const value = 2 + 2;
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);
//
//     // toBe and toEqual are equivalent for numbers
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
// });

// test('adding floating point numbers', () => {
//     const value = 0.1 + 0.2;
//     //expect(value).toBe(0.3);           This won't work because of rounding error
//     expect(value).toBeCloseTo(0.3); // This works.
// });

// test('null', () => {
//     const n = 0;
//     //expect(n).toBeNull(); === null
//     expect(n).toBeDefined();// == null 0
//     // expect(n).not.toBeUndefined();  !== null 0
//     // expect(n).not.toBeTruthy(); соответствует любому if утверждению, считающемуся истиннымсоответствует любому ifутверждению, считающемуся истинным
//     // expect(n).toBeFalsy(); соответствует тому, что if выражение обрабатывается как ложное
// });
// test('zero', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
// });

// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//         for (let b = 1; b < 10; b++) {
//             expect(a + b).not.toBe(0);
//         }
//     }
// });

// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2}); //проверка содержания обьекта
// });

// test('two plus two is four', () => {
//     expect(2 + 2).toBe(3); // сколько должно быть
// });


// test('should render App Jest ', () => {
//     const component = renderer.create(
//         <App/>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });


// it('should render App Mount', () => {
//     const wrapper = mount(
//         <App/>
//     );
//     expect(wrapper).toMatchSnapshot();
// });

// it('should render  App Shallow', () => {
//     const wrapper = shallow(
//         <App/>
//     );
//     expect(wrapper).toMatchSnapshot();
// });


// it('State App', () => {
//     const wrapper = mount(<App/>);
//     //expect(wrapper.find('.block-table').childAt(0)).toEqual('.wrapper-table');
//     expect(wrapper.state().tableCell).toEqual( [[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]);
//     expect(wrapper.state().initialWidth).toEqual(4);
//     expect(wrapper.state().initialHeight).toEqual(4);
//     expect(wrapper.state().cellSize).toEqual(50);
//     expect(wrapper.state().minusTopDisplay).toEqual(false);
//     expect(wrapper.state().minusLeftDisplay).toEqual(false);
//     expect(wrapper.state().minusTop).toEqual(5);
//     expect(wrapper.state().minusLeft).toEqual(5);
// });

// it('should render a App', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.find('.wrapper-table').length).toBe(1)
//     expect(wrapper.find( 'Button')).toHaveLength(4);
//     expect(wrapper.find(Button).length).toBe(4)
//     expect(wrapper.find(Table).length).toBe(1)
//     expect(wrapper.find('.button-minus')).toHaveLength(2);
//     expect(wrapper.find('.button-minus').at(1).type()).toEqual('button')
//     expect(wrapper.find('.table').childAt(0).type()).toEqual('tbody');
//     expect(wrapper.find('.table').childAt(0).childAt(0).key()).toEqual("11");
//     expect(wrapper.find('.table').childAt(0).childAt(2).childAt(2).key()).toEqual("33")
// });



// it('Table get props', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.find(Table).get(0).props.children).toEqual([[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]);
//     expect(wrapper.find(Table).get(0).props.sizeStyle).toEqual({width: "50px", height: "50px"});
// });


// it('shallow render Table', () => {
//     const wrapper = shallow(<Table sizeStyle={{width:  "50px", height:  "50px"}} children={[[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]}/>);
//     expect(wrapper).toMatchSnapshot();
// });



// it('should render a App', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.find(Table).get(0).props.children).toEqual([[11, 12, 13, 14], [21, 22, 23, 24], [31, 32, 33, 34], [41, 42, 43, 44]]);
//     wrapper.find('.button-plus_right').simulate('click');
//     wrapper.find('.button-plus_right').simulate('click');
//     //expect(wrapper).toMatchSnapshot();
//     expect(wrapper.find('Table').get(0).props.children).toEqual([[11, 12, 13, 14, 15, 16], [21, 22, 23, 24, 25, 26], [31, 32, 33, 34, 35, 36], [41, 42, 43, 44, 45, 46]]);
//     wrapper.find('.button-plus_bottom').simulate('click');
//     wrapper.find('.button-plus_bottom').simulate('click');
//     //expect(wrapper).toMatchSnapshot();
//     expect(wrapper.find('Table').get(0).props.children).toEqual([[11, 12, 13, 14, 15, 16], [21, 22, 23, 24, 25, 26], [31, 32, 33, 34, 35, 36], [41, 42, 43, 44, 45, 46],[51, 52, 53, 54, 55, 56],[61, 62, 63, 64, 65, 66]]);
//     wrapper.find('.button-minus_top').simulate('click');
//     expect(wrapper.find('Table').get(0).props.children).toEqual([[12, 13, 14, 15, 16], [ 22, 23, 24, 25, 26], [32, 33, 34, 35, 36 ], [42, 43, 44, 45, 46],[52, 53, 54, 55, 56],[62, 63, 64, 65, 66]]);
//     wrapper.find('.button-minus_left').simulate('click');
//     wrapper.find('.button-minus_left').simulate('click');
//     expect(wrapper.find('Table').get(0).props.children).toEqual([[32, 33, 34, 35, 36 ], [42, 43, 44, 45, 46],[52, 53, 54, 55, 56],[62, 63, 64, 65, 66]]);
// });


// it('Not work', () => {
//     expect(wrapper.find('.table').childAt(0).childAt(1).childAt(1).type()).toEqual('td');
//     expect(wrapper.state().minusTop).toEqual(5);
//     expect(wrapper.state().minusLeft).toEqual(5);
//     wrapper.find('.table').childAt(0).childAt(1).childAt(1).simulate('mouseover');
//     expect(wrapper.state().minusTop).toEqual(5); //toEqual() = 3  // minusTop: target.offsetLeft + 3, target.offsetLeft - not work
//     expect(wrapper.state().minusLeft).toEqual(5); //3  // minusLeft: target.offsetTop + 3, target.offsetTop - not work
// });
