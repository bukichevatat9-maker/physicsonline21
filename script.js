const formulas = document.getElementById('formulas');
const lab = document.getElementById('lab');
const labpage = document.getElementById('labpage');
const formulas2 = document.getElementById('formulas2');

formulas.addEventListener('click', function () {
  formulas2.classList.remove('hidden');
  
  labpage.classList.add('hidden');
});

lab.addEventListener('click', function () {
  formulas2.classList.add('hidden');
  
  labpage.classList.remove('hidden');
});


const unitBySection = {
  Mechanic: [
    {value: 'm', label: 'м'},
    {value: 'm/c', label: 'м/с'},
    {value: 's', label: 'с'},
    {value: 'm/c2', label: 'м/с²'},
    {value: 'kg', label: 'кг'},
    {value: 'N', label: 'Н'},
    {value: 'rad', label: 'рад'},
    {value: 'm³', label: 'м³'},
    {value: 'kg/m³', label: 'кг/м³'},
    {value: 'rad/s', label: 'рад/с'},
    {value: '°', label: '°'},
    {value: 'kg*m/s', label: 'кг*м/с'},
    {value: 'Dj', label:'Дж'},
    {value: 'N/m', label: 'Н/м'},
    {value: 'kg2', label:'кг(m2)'},
    {value: 'm0', label: 'м(0)'},
    {value: 's0', label: 'c(0)'},
    {value: 'm/s0', label: 'м/с(0)'},
    {value: 'Pa', label: 'Па'},
    {value: 'Vt', label: 'Вт'},
    {value: 'N*m', label: 'Н*м'},
    {value: 'Djuse', label: 'Дж(затраты)'},
    {value: 'kg*m/s(2)', label: 'кг*м/с(2)'},
    {value: 'm²', label: 'м²'},
  ],
    Optics: [
    {value: 'm', label: 'м'},
    {value: 'm1', label: 'м (d)'},
    {value: 'm2', label: 'м (f)'},
    {value: 'm3', label: 'м (F)'},
    {value: 'm4', label: 'м (R)'},
    {value: 'Gc', label: 'Гц'},
    {value: 'c', label: 'с'},
    {value: '', label: ' '},
    {value: 'dptr', label: 'дптр'},
    {value: 'grad', label: '°'},
    {value: 'm/c', label: 'м/с'},
    {value: 'm/c1', label: 'м/с (v1)'},
    {value: 'm/c2', label: 'м/с (v2)'},
    {value: 'nm', label: 'нм'},
    {value: 'mm', label: 'мм'},
    {value: '', label: ' '},
    {value: 'bezrazm', label: 'безразм'},
  ],
    Molecularphysics: [
    {value: 'kg/m³', label: 'кг/м³'},
    {value: 'mol', label: 'моль'},
    {value: '1/m³', label: '1/м³'},
    {value: '1/m³_1', label: '1/м³ (n1)'},
    {value: '1/m³_2', label: '1/м³ (n2)'},
    {value: 'Pa', label: 'Па'},
    {value: 'Pa1', label: 'Па (p1)'},
    {value: 'Pa2', label: 'Па (p2)'},
    {value: 'm³', label: 'м³'},
    {value: 'm³_1', label: 'м³ (V1)'},
    {value: 'm³_2', label: 'м³ (V2)'},
    {value: 'K', label: 'К'},
    {value: 'K1', label: 'К (T1)'},
    {value: 'K2', label: 'К (T2)'},
    {value: 'Dj', label: 'Дж'},
    {value: '', label: ''},
    {value: 'kg/mol', label: 'кг/моль'},
    {value: 'm/c', label: 'м/с'},
    {value: 'm/c1', label: 'м/с (v1)'},
    {value: 'm/c2', label: 'м/с (v2)'},
    {value: '%', label: '%'},
    {value: 'kg', label: 'кг'},
    {value: 'kg1', label: 'кг (m1)'},
    {value: 'kg2', label: 'кг (m2)'},
    {value: 'm3', label: 'м3'},
    {value: 'm-3', label: 'м-3'},
    {value: 'm2/s2', label: 'м2/с2'},
    {value: 'Dj/K', label: 'Дж/К'},
    {value: 'Dj/(mol*K)', label: 'Дж/(моль*К)'},
    {value: '1/mol', label: '1/моль'},
  ],
  
  
    Electricity: [
    {value:'Kl', label:'Кл'},
    {value:'Kl1', label:'Кл (q1)'},
    {value:'Kl2', label:'Кл (q2)'},
    {value:'A', label:'А'},
    {value:'V', label:'В'},
    {value:'V1', label:'В (phi1)'},
    {value:'V2', label:'В (phi2)'},
    {value:'Om', label:'Ом'},
    {value:'F', label:'Ф'},
    {value:'F1', label:'Ф (C1)'},
    {value:'F2', label:'Ф (C2)'},
    {value:'V/m', label:'В/м'},
    {value:'Tl', label:'Тл'},
    {value:'Vb', label:'Вб'},
    {value:'Gn', label:'Гн'},
    {value:'Dj', label:'Дж'},
    {value:'N', label:'Н'},
    {value:'N1', label:'Н (F1)'},
    {value:'m', label:'м'},
    {value:'m1', label:'м (r)'},
    {value:'m2', label:'м (d)'},
    {value:'m3', label:'м (d1)'},
    {value:'Vt', label:'Вт'},
    {value:'c', label:'с'},
    {value:'', label:' '}, 
    {value:'F/m', label:'Ф/м'},
    {value:'N*m2/Kl2', label:'Н·м²/Кл²'},
    {value:'N*m/Kl', label:'Н·м/Кл'},
    {value:'Dj/Kl', label:'Дж/Кл'},
    {value:'Kl/m3', label:'Кл/м³'},
    {value:'m2', label:'м²'},
    {value:'Om*m', label:'Ом·м'},
    {value:'%', label:'%'},
  
  ],
};

const sectionSelect = document.getElementById('physSection');
const unit1Select = document.getElementById('unit1Select');
const unit2Select = document.getElementById('unit2Select');
const unit3Select = document.getElementById('unit3Select');

function fillUnits(section) {
  const units = unitBySection[section];

  unit1Select.innerHTML = '';
  unit2Select.innerHTML = '';
  unit3Select.innerHTML = '';

  if (!units || units.length === 0) {
    const opt1 = document.createElement('option');
    opt1.textContent = 'Нет единиц для этого раздела';
    opt1.value = '';
    unit1Select.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.textContent = 'Нет единиц для этого раздела';
    opt2.value = '';
    unit2Select.appendChild(opt2);

    const opt3 = document.createElement('option');
    opt3.textContent = 'Нет единиц для этого раздела';
    opt3.value = '';
    unit3Select.appendChild(opt3);

    return;
  }

  units.forEach((unit) => {
    const option1 = document.createElement('option');
    option1.value = unit.value;
    option1.textContent = unit.label;
    unit1Select.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = unit.value;
    option2.textContent = unit.label;
    unit2Select.appendChild(option2);

    const option3 = document.createElement('option');
    option3.value = unit.value;
    option3.textContent = unit.label;
    unit3Select.appendChild(option3);
  });

  if (units.length >= 3) {
    unit1Select.value = units[0].value;
    unit2Select.value = units[1].value;
    unit3Select.value = units[2].value;
  }
}

sectionSelect.addEventListener('change', () => {
  fillUnits(sectionSelect.value);
});

fillUnits(sectionSelect.value);



// --------- КАЛЬКУЛЯТОР: ВСЕ ВОЗМОЖНЫЕ ФОРМУЛЫ ---------

const v1 = document.getElementById('val1');
const v2 = document.getElementById('val2');
const v3 = document.getElementById('val3');


const calcresults = document.getElementById('resultbutton');
const resultdiv = document.getElementById('results');

function roundToHundredths(value) {
  return Number.isFinite(value)
    ? value.toFixed(2)
    : 'ошибка';
}

const unitToVarsBySection = {
  Mechanic: {
    'kg': ['m'], // масса
    'm/c2': ['a', 'g', 'ax'], // ускорение (в т.ч. g)
    'm/c': ['v'], // скорость
    'm': ['s', 'r', 'l', 'dx', 'h', 'X'], // путь, радиус, плечо — ВСЁ сразу
    's': ['t', 'T'], // время/период
    'rad': ['phi', 'dphi'], // угол
    'Dj' : ['A', 'Ek', 'Ep', 'Epp', 'E', 'Ain'],
    'm³': ['V'],
    'kg/m³':['rho'],
    'N': ['F', 'FA', 'Ft', 'Fupr'],
    'N/m': ['k'],
    '°': ['alpha'],
    '%': ['eta'],
    'kg2': ['m2'],
    'kg*m/s(2)': ['pulse2'],
    's0': ['t0'],
    'm/s0': ['v0'],
    'm0': ['x0'],
    'Pa': ['P', 'pHydro'],
    'kg*m/s': ['pulse', 'dp'],
    'rad/s' : ['w'],
    'Vt': ['p'],
    'N*m': ['M'],
    'Djuse': ['Ause'],
    'm²': ['S'],
    
  },
    
  Electricity: {
    // Заряды
    'Kl': ['q', 'Q'],
    'Kl1': ['q1'],
    'Kl2': ['q2'],

    // Ток, сопротивление, мощность
    'A': ['I'],
    'Om': ['R', 'R1', 'R2', 'r'],
    'Vt': ['P'],

    // Напряжения и потенциалы (в т.ч. ЭДС E)
    'V': ['U', 'E'],
    'V1': ['phi1'],
    'V2': ['phi2'],

    // Ёмкости
    'F': ['C'],
    'F1': ['C1'],
    'F2': ['C2'],

    // Напряжённость
    'V/m': ['E'],

    // Энергия, работа, теплота
    'Dj': ['W', 'Wp', 'A', 'Q'],

    // Силы
    'N': ['F'],
    'N1': ['F1'],

    // Расстояния (в т.ч. длина проводника l)
    'm': ['r', 'd', 'd1', 'l'],
    'm1': ['r'],
    'm2': ['d'],
    'm3': ['d1'],

    // Время
    'c': ['t'],

    // Электрическая постоянная, коэффициент k
    'F/m': ['eps0'],
    'N*m2/Kl2': ['k'],

    // Потенциал как Дж/Кл
    'Dj/Kl': ['phi'],

    // Площадь
    'm2': ['S'],

    // Удельное сопротивление
    'Om*m': ['rho'],

    // КПД
    '%': ['eta'],
  },
  
    Molecularphysics: {
    // Плотность
    'kg/m³': ['rho'],

    // Количество вещества
    'mol': ['nu', 'nu1', 'nu2'],

    // Концентрация молекул
    '1/m³': ['n'],
    '1/m³_1': ['n1'],
    '1/m³_2': ['n2'],

    // Давление
    'Pa': ['p', 'pHydro'],
    'Pa1': ['p1'],
    'Pa2': ['p2'],

    // Объём
    'm³': ['V'],
    'm³_1': ['V1'],
    'm³_2': ['V2'],

    // Температура
    'K': ['T'],
    'K1': ['T1'],
    'K2': ['T2'],

    // Энергия
    'Dj': ['E', 'Ek', 'U'],

    // Молярная масса
    'kg/mol': ['M'],

    // Скорость молекул
    'm/c': ['v'],
    'm/c1': ['v1'],
    'm/c2': ['v2'],

    // КПД
    '%': ['eta'],

    // Масса
    'kg': ['m'],
    'kg1': ['m1'],
    'kg2': ['m2'],

    // Квадрат скорости
    'm2/s2': ['v2_sq'],

    // Постоянные
    'Dj/K': ['k'], // постоянная Больцмана
    'Dj/(mol*K)': ['R'], // универсальная газовая постоянная
    '1/mol': ['NA'], // постоянная Авогадро
  },
  
    Optics: {
    // Расстояния (все в метрах)
    'm': ['d', 'f', 'F', 'R', 'r', 'L', 'h', 'H'],
    'm1': ['d'],
    'm2': ['f'],
    'm3': ['F'],
    'm4': ['R', 'r'],

    // Частота
    'Gc': ['nu'],

    // Время
    'c': ['t'],

    // Оптическая сила
    'dptr': ['D'],

    // Углы
    'grad': ['alpha', 'beta', 'gamma', 'phi'],

    // Скорость света
    'm/c': ['c', 'v'],
    'm/c1': ['v1'],
    'm/c2': ['v2'],

    // Длина волны
    'nm': ['lambda'],
    'mm': ['lambda_mm'],

    // Показатель преломления (безразмерный)
    'bezrazm': ['n', 'n21', 'n1', 'n2'],

    // Период решётки
    'm5': ['d_grat'],

    // Порядок максимума
    'bezrazm': ['k', 'm'],
  },
  };
  
calcresults.addEventListener('click', function(){
  const section = sectionSelect.value;

  // читаем значения
  const v1Text = v1.value.trim();
  const v2Text = v2.value.trim();
  const v3Text = v3.value.trim();

  const x1 = v1Text === '' ? NaN : Number(v1Text);
  const x2 = v2Text === '' ? NaN : Number(v2Text);
  const x3 = v3Text === '' ? NaN : Number(v3Text);

  // читаем выбранные единицы
  const u1 = unit1Select.value;
  const u2 = unit2Select.value;
  const u3 = unit3Select.value;

  const vars = {};

  function setVarsByUnit(sectionName, unit, value) {
    if (isNaN(value)) return;
    const map = unitToVarsBySection[sectionName];
    if (!map) return;

    const varNames = map[unit]; // например 'm' → ['s', 'r', 'l', 'dx', 'x0', 'S', 'h', 'x']
    if (!varNames) return;

    varNames.forEach(name => {
      // если хочешь, можно не перезаписывать уже существующее значение
      vars[name] = value;
    });
  }

  setVarsByUnit(section, u1, x1);
  setVarsByUnit(section, u2, x2);
  setVarsByUnit(section, u3, x3);

  const formulas = formulasBySection[section] || [];
  const results = [];

  formulas.forEach(formula => {
    const canCompute = formula.needs.every(name => vars[name] !== undefined);

    if (canCompute) {
      const computed = formula.compute(vars);

      Object.keys(computed).forEach(key => {
        const value = computed[key];

        let unitLabel = '';

        if (section === 'Mechanic') {
        if (key === 'V') unitLabel = 'м³';
        if (key === 'k') unitLabel = 'Н/м';
        if (key === 'w') unitLabel = 'рад/с';
        if (key === 'alpha') unitLabel = '°';
        if (key === 'rho') unitLabel = 'кг/м³';
        if (key === 'v0') unitLabel = 'м/с(0)';
        if (key === 't0') unitLabel = 'с(0)';
        if (key === 'm2') unitLabel = 'кг(m2)';
        if (key === 'pulse' || key === 'dp') unitLabel = ' кг*м/с';
        if (key === 'M') unitLabel = 'Н*м';
        if (key === 'p') unitLabel = 'Вт';
        if (key === 'pulse2') unitLabel = 'кг*м/с(2)';
        if (key === 'x0') unitLabel = 'м(0)';
        if (key === 'eta') unitLabel = '%';
        if (key === 'P' || key === 'pHydro') unitLabel = 'Па';
          if (key === 'F' || key === 'Fupr' || key === 'Ft' || key === 'FA') unitLabel = ' Н';
          if (key === 'm') unitLabel = ' кг';
          if (key === 'a' || key === 'g') unitLabel = ' м/с²';
          if (key === 'S') unitLabel = 'м²';
          if (key === 's' || key === 'r' || key === 'l' || key === 'X' || key === 'dx' || key === 'h') unitLabel = ' м';
          if (key === 't' || key === 'T') unitLabel = ' с';
          if (key === 'v') unitLabel = ' м/с';
          if (key === 'Ek' || key === 'A' || key === 'Ep' || key === 'Epp' || key === 'Ain' || key === 'E') unitLabel = ' Дж';
          if (key === 'Ause') unitLabel = 'Дж(затраты)';
          if (key === 'M') unitLabel = ' Н·м';
                    if (key === 'phi' || key === 'dphi') unitLabel = ' рад'; }
          
          else if (section === 'Electricity') {

        // Напряжения и потенциалы
          if (key === 'U' || key === 'phi' || key === 'phi1' || key === 'phi2' || key === 'E') unitLabel = ' В';

          // Ток, сопротивление, мощность
          if (key === 'I') unitLabel = ' А';
          if (key === 'R' || key === 'R1' || key === 'R2' || key === 'r') unitLabel = ' Ом';
          if (key === 'P') unitLabel = ' Вт';

          // Заряды
          if (key === 'q' || key === 'q1' || key === 'q2' || key === 'Q') unitLabel = ' Кл';

          // Ёмкости
          if (key === 'C' || key === 'C1' || key === 'C2') unitLabel = ' Ф';

          // Напряжённость
          if (key === 'Efield') unitLabel = ' В/м';

          // Энергия, работа, теплота
          if (key === 'W' || key === 'Wp' || key === 'A' || key === 'Q') unitLabel = ' Дж';

          // Силы
          if (key === 'F' || key === 'F1') unitLabel = ' Н';

          // Расстояния
          if (key === 'r' || key === 'd' || key === 'd1' || key === 'l') unitLabel = ' м';

          // Время
          if (key === 't') unitLabel = ' с';

          // Электрическая постоянная, коэффициент k
          if (key === 'eps0') unitLabel = ' Ф/м';
          if (key === 'k') unitLabel = ' Н·м²/Кл²';

          // Площадь
          if (key === 'S') unitLabel = ' м²';

          // Удельное сопротивление
          if (key === 'rho') unitLabel = ' Ом·м';

          // КПД
          if (key === 'eta') unitLabel = '';
        
        
        } else if (section === 'Molecularphysics') {
          // Плотность
          if (key === 'rho') unitLabel = ' кг/м³';

          // Количество вещества
          if (key === 'nu' || key === 'nu1' || key === 'nu2') unitLabel = ' моль';

          // Концентрация
          if (key === 'n' || key === 'n1' || key === 'n2') unitLabel = ' м⁻³';

          // Давление
          if (key === 'p' || key === 'p1' || key === 'p2' || key === 'pHydro') unitLabel = ' Па';

          // Объём
          if (key === 'V' || key === 'V1' || key === 'V2') unitLabel = ' м³';

          // Температура
          if (key === 'T' || key === 'T1' || key === 'T2') unitLabel = ' К';

          // Энергия
          if (key === 'E' || key === 'Ek' || key === 'U') unitLabel = ' Дж';

          // Молярная масса
          if (key === 'M') unitLabel = ' кг/моль';

          // Скорость
          if (key === 'v' || key === 'v1' || key === 'v2') unitLabel = ' м/с';

          // КПД
          if (key === 'eta') unitLabel = ' %';

          // Масса
          if (key === 'm' || key === 'm1' || key === 'm2') unitLabel = ' кг';

          // Квадрат скорости
          if (key === 'v2_sq') unitLabel = ' м²/с²';

          // Постоянные
          if (key === 'k') unitLabel = ' Дж/К';
          if (key === 'R') unitLabel = ' Дж/(моль*К)';
          if (key === 'NA') unitLabel = ' моль⁻¹';

        } else if (section === 'Optics') {
          // Расстояния
          if (key === 'd' || key === 'f' || key === 'F' || key === 'R' || key === 'r' || key === 'L' || key === 'h' || key === 'H') unitLabel = ' м';

          // Частота
          if (key === 'nu') unitLabel = ' Гц';

          // Время
          if (key === 't') unitLabel = ' с';

          // Оптическая сила
          if (key === 'D') unitLabel = ' дптр';

          // Углы
          if (key === 'alpha' || key === 'beta' || key === 'gamma' || key === 'phi') unitLabel = ' °';

          // Скорость
          if (key === 'c' || key === 'v' || key === 'v1' || key === 'v2') unitLabel = ' м/с';

          // Длина волны
          if (key === 'lambda') unitLabel = ' м';

          // Показатель преломления
          if (key === 'n' || key === 'n21' || key === 'n1' || key === 'n2') unitLabel = '';

          // Порядок максимума
          if (key === 'k' || key === 'm') unitLabel = '';

          // Период решётки
          if (key === 'd_grat') unitLabel = ' м';
        }
        
                const displayedValue = roundToHundredths(value);

        results.push(
          ` ${formula.name}: ${key} = ${displayedValue}${unitLabel}`
        );
      });
    }
  });

  if (results.length === 0) {
    resultdiv.textContent =
      'Нет формул для такой комбинации значений.';
  } else {
    resultdiv.innerHTML = results.join('<br>');
  }
  
  v1.value = '';
  v2.value = '';
  v3.value = '';
  const units = unitBySection[section];
  if (units && units.length >= 3) {
    unit1Select.value = units[0].value;
    unit2Select.value = units[1].value;
    unit3Select.value = units[2].value;
  
  }
});


const formulasBySection = {
  Mechanic: [
    // F = m a
    {
      name: 'Второй закон Ньютона. F = m a',
      needs: ['m', 'a'],
      compute: vars => ({ F: vars.m * vars.a })
    },

    // S = v t
    {
      name: 'Путь. s = v t',
      needs: ['v', 't'],
      compute: vars => ({ s: vars.v * vars.t })
    },
    
    {
    name: 'Проекция перемещения. S= vx²-v0x²/2ax',
    needs: ['v', 'v0', 'a'],
    compute: vars => ({s: ((vars.v * vars.v) - (vars.v0 * vars.v0)) / (vars.a * 2)})
    },
    
{
  name: 'm = F / a',
  needs: ['F','a'],
  compute: vars => ({ m: vars.F / vars.a })
},
{
  name: 'a = F / m',
  needs: ['F','m'],
  compute: vars => ({ a: vars.F / vars.m })
},

// x = x0 + v t
{
  name: 'Равномерное движение. X= x0 + v t',
  needs: ['x0','v','t'],
  compute: vars => ({ X: vars.x0 + vars.v * vars.t })
},
{
  name: 'Равномерное движение. x0 = X - v t',
  needs: ['X','v','t'],
  compute: vars => ({ x0: vars.X- vars.v * vars.t })
},
{
  name: 'Равномерное движение. v = (X - x0) / t',
  needs: ['X','x0','t'],
  compute: vars => ({ v: (vars.X - vars.x0) / vars.t })
},
{
  name: ' Равномерное движение. t = (x - x0) / v',
  needs: ['X','x0','v'],
  compute: vars => ({ t: (vars.X - vars.x0) / vars.v })
},


{
  name: 'Путевая скорость. v = s / t',
  needs: ['s','t'],
  compute: vars => ({ v: vars.s / vars.t })
},
{
  name: 't = s / v',
  needs: ['s','v'],
  compute: vars => ({ t: vars.s / vars.v })
},


{
  name: 'Равноускоренное движение. v0 = v - a t',
  needs: ['v','a','t'],
  compute: vars => ({ v0: vars.v - vars.a * vars.t })
},
{
  name: 'Ускорение. a = (v - v0) / t',
  needs: ['v','v0','t'],
  compute: vars => ({ a: (vars.v - vars.v0) / vars.t })
},
{
  name: 'Равноускоренное движение. t = (v - v0) / a',
  needs: ['v','v0','a'],
  compute: vars => ({ t: (vars.v - vars.v0) / vars.a })
},


{
  name: 'v² = v0² + 2 a s',
  needs: ['v0','a','s'],
  compute: vars => ({ v: Math.sqrt( vars.v0*vars.v0 + 2 * vars.a * vars.s )})
},
{
  name: 'v0² = v² - 2 a s',
  needs: ['v','a','s'],
  compute: vars => ({ v0: Math.sqrt( vars.v*vars.v - 2 * vars.a * vars.s) })
},
{
  name: 'Ускорение. a = (v² - v0²) / (2 s)',
  needs: ['v','v0','s'],
  compute: vars => ({ a: (vars.v*vars.v - vars.v0*vars.v0) / (2 * vars.s) })
},

// w = dphi / t
{
  name: 'Угловая скорость. w = dphi / t',
  needs: ['dphi','t'],
  compute: vars => ({ w: vars.dphi / vars.t })
},
{
  name: 'Изменение угла. dphi = w t',
  needs: ['w','t'],
  compute: vars => ({ dphi: vars.w * vars.t })
},
{
  name: 't = dphi / w',
  needs: ['dphi','w'],
  compute: vars => ({ t: vars.dphi / vars.w })
},

// v = w r
{
  name: 'v = w r',
  needs: ['w','r'],
  compute: vars => ({ v: vars.w * vars.r })
},
{
  name: 'Угловая скорость. w = v / r',
  needs: ['v','r'],
  compute: vars => ({ w: vars.v / vars.r })
},
{
  name: 'r = v / w',
  needs: ['v','w'],
  compute: vars => ({ r: vars.v / vars.w })
},


{
  name: 'v = 2π r / T',
  needs: ['r','T'],
  compute: vars => ({ v: 2 * Math.PI * vars.r / vars.T })
},
{
  name: 'r = v T / (2π)',
  needs: ['v','T'],
  compute: vars => ({ r: vars.v * vars.T / (2 * Math.PI) })
},


{
  name: 'v = sqrt(a r)',
  needs: ['a','r'],
  compute: vars => ({ v: Math.sqrt(vars.a * vars.r) })
},
{
  name: 'Радиус. r = v² / a',
  needs: ['v','a'],
  compute: vars => ({ r: (vars.v*vars.v) / vars.a })
},

// t = v sin a / g
{
  name: 'Время полета при броске под углом. t = 2v0 sin a / g',
  needs: ['v0','alpha'],
  compute: vars => ({ t: 2 * vars.v0 * Math.sin(vars.alpha * Math.PI/180) / 10})
},
{
  name: 'Бросок под углом. v = t g / sin a',
  needs: ['t','alpha'],
  compute: vars => ({ v: vars.t * 10 / Math.sin(vars.alpha * Math.PI/180) })
},


// h = v² sin² a / (2 g)
{
  name: 'Высота подъёма при броске под углом. h = v0² sin² a / (2 g)',
  needs: ['v0','alpha'],
  compute: vars => ({ h: ((vars.v0*vars.v0) * Math.sin(vars.alpha * Math.PI/180)*Math.sin(vars.alpha * Math.PI/180)) / (20) })
},
{
  name: 'Бросок под углом. v0 = sqrt(2 g h) / sin a',
  needs: ['h','alpha',],
  compute: vars => ({ v0: Math.sqrt(2 * 10 * vars.h) / Math.sin(vars.alpha * Math.PI/180) })
},


// s = v² sin 2a / g
{
  name: 'Дальность полёта при броске под углом. s = v0² sin 2a / g',
  needs: ['v0','alpha'],
  compute: vars => ({ s: (vars.v0*vars.v0) * Math.sin(2 * vars.alpha * Math.PI/180) / 10 })
},


{
  name: 'm = Ft / g',
  needs: ['Ft'],
  compute: vars => ({ m: vars.Ft / 10 })
},


{
  name: 'Коэффициент упругости. k = Fupr / dx',
  needs: ['Fupr','dx'],
  compute: vars => ({ k: vars.Fupr / vars.dx })
},
{
  name: 'Растяжение пружины. dx = Fupr / k',
  needs: ['Fupr','k'],
  compute: vars => ({ dx: vars.Fupr / vars.k })
},


{
  name: 'Плотность жидкости. rho = FA / (g V)',
  needs: ['FA','V'],
  compute: vars => ({ rho: vars.FA / (10 * vars.V) })
},
{
  name: 'Объём. V = FA / (g rho)',
  needs: ['FA','rho'],
  compute: vars => ({ V: vars.FA / (10 * vars.rho) })
},


{
  name: 'm1 = F r² / (G m2)',
  needs: ['Ft','m2','r'],
  compute: vars => ({ m1: vars.Ft * vars.r*vars.r / (6.67e-11 * vars.m2) })
},
{
  name: 'm2 = F r² / (G m1)',
  needs: ['Ft','m1','r'],
  compute: vars => ({ m2: vars.Ft * vars.r*vars.r / (6.67e-11 * vars.m1) })
},
{
  name: 'Расстояние в законе всемирного тяготения. r = sqrt(G m1 m2 / F)',
  needs: ['Ft','m1','m2'],
  compute: vars => ({ r: Math.sqrt(6.67e-11 * vars.m1 * vars.m2 / vars.Ft) })
},



// p = F / S
{
  name: 'Давление. P = F / S',
  needs: ['F','S'],
  compute: vars => ({ P: vars.F / vars.S })
},
{
  name: 'Сила давления. F = P S',
  needs: ['P','S'],
  compute: vars => ({ F: vars.P * vars.S })
},
{
  name: 'Площадь. S = F / P',
  needs: ['F','P'],
  compute: vars => ({ S: vars.F / vars.P })
},


{
  name: 'm = rho V',
  needs: ['rho','V'],
  compute: vars => ({ m: vars.rho * vars.V })
},
{
  name: 'V = m / rho',
  needs: ['m','rho'],
  compute: vars => ({ V: vars.m / vars.rho })
},


{
  name: 'm = 2 E / v²',
  needs: ['Ek','v'],
  compute: vars => ({ m: 2 * vars.Ek / (vars.v*vars.v) })
},
{
  name: 'v = sqrt(2 E / m)',
  needs: ['Ek','m'],
  compute: vars => ({ v: Math.sqrt(2 * vars.Ek / vars.m) })
},


{
  name: 'm = E / (g h)',
  needs: ['Ep','h'],
  compute: vars => ({ m: vars.Ep / (10 * vars.h) })
},

{
  name: 'h = E / (m g)',
  needs: ['Ep','m'],
  compute: vars => ({ h: vars.Ep / (vars.m * 10) })
},

{
  name: 'k = 2 E / dx²',
  needs: ['Epp','dx'],
  compute: vars => ({ k: 2 * vars.Epp / (vars.dx*vars.dx) })
},
{
  name: 'dx = sqrt(2 E / k)',
  needs: ['Epp','k'],
  compute: vars => ({ dx: Math.sqrt(2 * vars.Epp / vars.k) })
},


{
  name: 'F = A / (s cos a)',
  needs: ['A','s','alpha'],
  compute: vars => ({ F: vars.A / (vars.s * Math.cos(vars.alpha * Math.PI/180)) })
},
{
  name: 's = A / (F cos a)',
  needs: ['A','F','alpha'],
  compute: vars => ({ s: vars.A / (vars.F * Math.cos(vars.alpha * Math.PI/180)) })
},

// p = m v (импульс)

{
  name: 'm = p / v',
  needs: ['pulse','v'],
  compute: vars => ({ m: vars.pulse / vars.v })
},
{
  name: 'v = p / m',
  needs: ['pulse','m'],
  compute: vars => ({ v: vars.pulse / vars.m })
},

// dp = F Δt
{
  name: 'Второй закон Ньютона в импульсной форме. dp = F dt',
  needs: ['F','t', 't0'],
  compute: vars => ({ dp: vars.F * (vars.t - vars.t0) })
},
{
  name: 'F = dp / dt',
  needs: ['pulse2','t', 't0', 'pulse'],
  compute: vars => ({ F: (vars.pulse - vars.pulse2) / (vars.t - vars.t0) })
},
{
  name: 'dt = dp / F',
  needs: ['pulse','pulse2', 'F'],
  compute: vars => ({ dt: (vars.pulse - vars.pulse2) / vars.F })
},


{
  name: 'Работа. A = P t',
  needs: ['p','t'],
  compute: vars => ({ A: vars.p * vars.t })
},
{
  name: 't = A / P',
  needs: ['A','p'],
  compute: vars => ({ t: vars.A / vars.p })
},

{
  name: 'F = M / l',
  needs: ['M','l'],
  compute: vars => ({ F: vars.M / vars.l })
},
{
  name: 'l = M / F',
  needs: ['M','F'],
  compute: vars => ({ l: vars.M / vars.F })
},

{
  name: 'rho = p / (g h)',
  needs: ['pHydro', 'h'],
  compute: vars => ({ rho: vars.pHydro / (10 * vars.h) })
},

{
  name: 'h = p / (rho g)',
  needs: ['pHydro','rho'],
  compute: vars => ({ h: vars.pHydro / (vars.rho * 10) })
},
    
    
    // vx = v0x + axt
    {
      name: 'Проекция скорости при равноускоренном движении. v_x = v_0x + a_x t',
      needs: ['v0', 'a', 't'],
      compute: vars => ({ vx: vars.v0 + vars.a * vars.t })
    },

    // w = Δφ / Δt
    {
      name: 'Угловая скорость. ω = Δφ / Δt',
      needs: ['phi', 't'],
      compute: vars => ({ w: vars.phi / vars.t })
    },

    // v = ω r
    {
      name: 'v = ω r',
      needs: ['w', 'r'],
      compute: vars => ({ v: vars.w * vars.r })
    },

    // T = 2πr / v
    {
      name: 'Период. T = 2πr / v',
      needs: ['r', 'v'],
      compute: vars => ({ T: 2 * Math.PI * vars.r / vars.v })
    },

    // a = v² / r
    {
      name: 'Центростремительное ускорение. a = v² / r',
      needs: ['v', 'r'],
      compute: vars => ({ a: (vars.v * vars.v) / vars.r })
    },

    // F = m g (используем a как g)
    {
      name: 'Сила тяжести. F = m g',
      needs: ['m'],
      compute: vars => ({ Ft: vars.m * 10 })
    },

    

    // F = k Δx
    {
      name: 'Сила упругости. F = k Δx',
      needs: ['k', 'dx'],
      compute: vars => ({ Fupr: vars.k * vars.dx })
    },

    // F = g ρ V (архимедова сила)
    {
      name: 'Архимедова сила. F = g ρ V',
      needs: [ 'rho', 'V'],
      compute: vars => ({ FA: 10 * vars.rho * vars.V })
    },

    // P = g ρ h (гидростатическое давление)
    {
      name: 'Гидростатическое давление. P = g ρ h',
      needs: [ 'rho', 'h'],
      compute: vars => ({ pHydro: 10 * vars.rho * vars.h })
    },

    // ρ = m / V
    {
      name: 'Плотность. ρ = m / V',
      needs: ['m', 'V'],
      compute: vars => ({ rho: vars.m / vars.V })
    },

    // p = m v (импульс)
    {
      name: 'Импульс. p = m v',
      needs: ['m', 'v'],
      compute: vars => ({ pulse: vars.m * vars.v })
    },

    // F = G m1 m2 / r²
    {
      name: 'Закон всемирного тяготения. F = G m1 m2 / r²',
      needs: ['m1', 'm2', 'r'],
      compute: vars => ({ F: 6.67e-11 * vars.m1 * vars.m2 / (vars.r * vars.r) })
    },


    // E = m v² / 2
    {
      name: 'Кинетическая энергия. E = m v² / 2',
      needs: ['m', 'v'],
      compute: vars => ({ Ek: 0.5 * vars.m * vars.v * vars.v })
    },

    // E = m g h
    {
      name: 'Потенциальная энергия. E = m g h',
      needs: ['m', 'h'],
      compute: vars => ({ Ep: vars.m * 10 * vars.h })
    },

    // E = k Δx² / 2
    {
      name: 'Потенциальная энергия пружины. E = k Δx² / 2',
      needs: ['k', 'dx'],
      compute: vars => ({ Epp: 0.5 * vars.k * vars.dx * vars.dx })
    },

    // A = F S cosα
    {
      name: 'Работа. A = F S cosα',
      needs: ['F', 's', 'alpha'],
      compute: vars => ({ A: vars.F * vars.s * Math.cos(vars.alpha * Math.PI/180) })
    },

    

    // P = A / t
    {
      name: 'Мощность. p = A / t',
      needs: ['A', 't'],
      compute: vars => ({ p: vars.A / vars.t })
    },

   // η = Aп / Аз * 100%
    {
      name: 'Относительная влажность. η = Aп / Аз * 100%',
      needs: ['Ause', 'Ain'],
      compute: vars => ({ eta: (vars.Ause / vars.Ain) * 100 })
    },
    

    // M = F l
    {
      name: 'Момент силы. M = F l',
      needs: ['F', 'l'],
      compute: vars => ({ M: vars.F * vars.l })
    },
  ],
    Electricity: [
    // ========== ПОСТОЯННЫЕ (встроены в формулы) ==========
    // ε₀ = 8.85e-12 Ф/м (электрическая постоянная)
    // k = 9e9 Н·м²/Кл² (коэффициент в законе Кулона, k = 1/(4πε₀))
    // e = 1.6e-19 Кл (элементарный заряд)

    // ========== ЗАКОН КУЛОНА ==========
    
    // F = k q1 q2 / r²
    {
      name: 'Закон Кулона. F = k q1 q2 / r²',
      needs: ['q1', 'q2', 'r'],
      compute: vars => ({ F: 9e9 * vars.q1 * vars.q2 / (vars.r * vars.r) })
    },
    {
      name: 'q1 = F r² / (k q2)',
      needs: ['F', 'q2', 'r'],
      compute: vars => ({ q1: vars.F * vars.r * vars.r / (9e9 * vars.q2) })
    },
    {
      name: 'q2 = F r² / (k q1)',
      needs: ['F', 'q1', 'r'],
      compute: vars => ({ q2: vars.F * vars.r * vars.r / (9e9 * vars.q1) })
    },
    {
      name: 'r = sqrt(k q1 q2 / F)',
      needs: ['F', 'q1', 'q2'],
      compute: vars => ({ r: Math.sqrt(9e9 * vars.q1 * vars.q2 / vars.F) })
    },

    // F = q1 q2 / (4πε₀ r²)
    {
      name: 'Закон Кулона. F = q1 q2 / (4πε₀ r²)',
      needs: ['q1', 'q2', 'r'],
      compute: vars => ({ F: vars.q1 * vars.q2 / (4 * Math.PI * 8.85e-12 * vars.r * vars.r) })
    },

    // ========== НАПРЯЖЁННОСТЬ ПОЛЯ ==========
    
    // E = F / q
    {
      name: 'Напряжённость. E = F / q',
      needs: ['F', 'q'],
      compute: vars => ({ E: vars.F / vars.q })
    },
    {
      name: 'F = E q',
      needs: ['E', 'q'],
      compute: vars => ({ F: vars.E * vars.q })
    },
    {
      name: 'q = F / E',
      needs: ['F', 'E'],
      compute: vars => ({ q: vars.F / vars.E })
    },

    // E = k q / r²
    {
      name: 'Напряжённость. E = k q / r²',
      needs: ['q', 'r'],
      compute: vars => ({ E: 9e9 * vars.q / (vars.r * vars.r) })
    },
    {
      name: 'q = E r² / k',
      needs: ['E', 'r'],
      compute: vars => ({ q: vars.E * vars.r * vars.r / 9e9 })
    },
    {
      name: 'r = sqrt(k q / E)',
      needs: ['E', 'q'],
      compute: vars => ({ r: Math.sqrt(9e9 * vars.q / vars.E) })
    },

    // E = q / (4πε₀ r²)
    {
      name: 'Напряжённость. E = q / (4πε₀ r²)',
      needs: ['q', 'r'],
      compute: vars => ({ E: vars.q / (4 * Math.PI * 8.85e-12 * vars.r * vars.r) })
    },

    // ========== ПОТЕНЦИАЛ ==========
    
    // phi = Wp / q
    {
      name: 'Потенциал. phi = Wp / q',
      needs: ['Wp', 'q'],
      compute: vars => ({ phi: vars.Wp / vars.q })
    },
    {
      name: 'Wp = phi q',
      needs: ['phi', 'q'],
      compute: vars => ({ Wp: vars.phi * vars.q })
    },
    {
      name: 'q = Wp / phi',
      needs: ['Wp', 'phi'],
      compute: vars => ({ q: vars.Wp / vars.phi })
    },

    // phi = k q / r
    {
      name: 'Потенциал. phi = k q / r',
      needs: ['q', 'r'],
      compute: vars => ({ phi: 9e9 * vars.q / vars.r })
    },
    {
      name: 'q = phi r / k',
      needs: ['phi', 'r'],
      compute: vars => ({ q: vars.phi * vars.r / 9e9 })
    },
    {
      name: 'r = k q / phi',
      needs: ['q', 'phi'],
      compute: vars => ({ r: 9e9 * vars.q / vars.phi })
    },

    // phi = q / (4πε₀ r)
    {
      name: 'Потенциал. phi = q / (4πε₀ r)',
      needs: ['q', 'r'],
      compute: vars => ({ phi: vars.q / (4 * Math.PI * 8.85e-12 * vars.r) })
    },

    // ========== РАЗНОСТЬ ПОТЕНЦИАЛОВ ==========
    
    // U = phi1 - phi2
    {
      name: 'Разность потенциалов. U = phi1 - phi2',
      needs: ['phi1', 'phi2'],
      compute: vars => ({ U: vars.phi1 - vars.phi2 })
    },
    {
      name: 'phi1 = U + phi2',
      needs: ['U', 'phi2'],
      compute: vars => ({ phi1: vars.U + vars.phi2 })
    },
    {
      name: 'phi2 = phi1 - U',
      needs: ['phi1', 'U'],
      compute: vars => ({ phi2: vars.phi1 - vars.U })
    },

    // U = A / q
    {
      name: 'разность потенциалов. U = A / q',
      needs: ['A', 'q'],
      compute: vars => ({ U: vars.A / vars.q })
    },
    
    {
      name: 'q = A / U',
      needs: ['A', 'U'],
      compute: vars => ({ q: vars.A / vars.U })
    },

    // ========== СВЯЗЬ E И U ==========
    
    // E = U / d
    {
      name: 'Напряжённость. E = U / d',
      needs: ['U', 'd'],
      compute: vars => ({ E: vars.U / vars.d })
    },
    {
      name: 'U = E d',
      needs: ['E', 'd'],
      compute: vars => ({ U: vars.E * vars.d })
    },
    {
      name: 'd = U / E',
      needs: ['U', 'E'],
      compute: vars => ({ d: vars.U / vars.E })
    },

    // ========== РАБОТА ==========
    
    // A = q U
    {
      name: 'Работа. A = q U',
      needs: ['q', 'U'],
      compute: vars => ({ A: vars.q * vars.U })
    },
    {
      name: 'q = A / U',
      needs: ['A', 'U'],
      compute: vars => ({ q: vars.A / vars.U })
    },
    {
      name: 'U = A / q',
      needs: ['A', 'q'],
      compute: vars => ({ U: vars.A / vars.q })
    },

    // ========== ПОТЕНЦИАЛЬНАЯ ЭНЕРГИЯ ==========
    
    // Wp = q phi
    {
      name: 'Работа по перемещению заряда. Wp = q phi',
      needs: ['q', 'phi'],
      compute: vars => ({ Wp: vars.q * vars.phi })
    },
    {
      name: 'q = Wp / phi',
      needs: ['Wp', 'phi'],
      compute: vars => ({ q: vars.Wp / vars.phi })
    },
    {
      name: 'phi = Wp / q',
      needs: ['Wp', 'q'],
      compute: vars => ({ phi: vars.Wp / vars.q })
    },

    // Wp = k q1 q2 / r
    {
      name: 'Потенциальная энергия взаимодействия. Wp = k q1 q2 / r',
      needs: ['q1', 'q2', 'r'],
      compute: vars => ({ Wp: 9e9 * vars.q1 * vars.q2 / vars.r })
    },
    {
      name: 'q1 = Wp r / (k q2)',
      needs: ['Wp', 'q2', 'r'],
      compute: vars => ({ q1: vars.Wp * vars.r / (9e9 * vars.q2) })
    },
    {
      name: 'q2 = Wp r / (k q1)',
      needs: ['Wp', 'q1', 'r'],
      compute: vars => ({ q2: vars.Wp * vars.r / (9e9 * vars.q1) })
    },
    {
      name: 'r = k q1 q2 / Wp',
      needs: ['q1', 'q2', 'Wp'],
      compute: vars => ({ r: 9e9 * vars.q1 * vars.q2 / vars.Wp })
    },

    // ========== ЁМКОСТЬ ==========
    
    // C = q / phi
    {
      name: 'Ёмкость конденсатора. C = q / phi',
      needs: ['q', 'phi'],
      compute: vars => ({ C: vars.q / vars.phi })
    },
    {
      name: 'q = C phi',
      needs: ['C', 'phi'],
      compute: vars => ({ q: vars.C * vars.phi })
    },
    {
      name: 'phi = q / C',
      needs: ['q', 'C'],
      compute: vars => ({ phi: vars.q / vars.C })
    },

    // C = q / U
    {
      name: 'Ёмкость конденсатора. C = q / U',
      needs: ['q', 'U'],
      compute: vars => ({ C: vars.q / vars.U })
    },
    {
      name: 'q = C U',
      needs: ['C', 'U'],
      compute: vars => ({ q: vars.C * vars.U })
    },
    {
      name: 'U = q / C',
      needs: ['q', 'C'],
      compute: vars => ({ U: vars.q / vars.C })
    },

    // ========== ПЛОСКИЙ КОНДЕНСАТОР ==========
    
    // C = ε₀ S / d
    {
      name: 'Ёмкость плоского конденсатора. C = ε₀ S / d',
      needs: ['S', 'd'],
      compute: vars => ({ C: 8.85e-12 * vars.S / vars.d })
    },
    {
      name: 'S = C d / ε₀',
      needs: ['C', 'd'],
      compute: vars => ({ S: vars.C * vars.d / 8.85e-12 })
    },
    {
      name: 'd = ε₀ S / C',
      needs: ['S', 'C'],
      compute: vars => ({ d: 8.85e-12 * vars.S / vars.C })
    },

    // C = ε₀ ε S / d (с диэлектриком)
    {
      name: 'Ёмкость конденсатора с диэлектриком. C = ε₀ ε S / d',
      needs: ['S', 'd', 'eps'],
      compute: vars => ({ C: 8.85e-12 * vars.eps * vars.S / vars.d })
    },
    {
      name: 'eps = C d / (ε₀ S)',
      needs: ['C', 'S', 'd'],
      compute: vars => ({ eps: vars.C * vars.d / (8.85e-12 * vars.S) })
    },

    // ========== ЭНЕРГИЯ КОНДЕНСАТОРА ==========
    
    // W = 1/2 C U²
    {
      name: 'Энергия конденсатора. W = 1/2 C U²',
      needs: ['C', 'U'],
      compute: vars => ({ W: 0.5 * vars.C * vars.U * vars.U })
    },
    {
      name: 'C = 2W / U²',
      needs: ['W', 'U'],
      compute: vars => ({ C: 2 * vars.W / (vars.U * vars.U) })
    },
    {
      name: 'U = sqrt(2W / C)',
      needs: ['W', 'C'],
      compute: vars => ({ U: Math.sqrt(2 * vars.W / vars.C) })
    },

    // W = q² / (2C)
    {
      name: 'Энергия конденсатора. W = q² / (2C)',
      needs: ['q', 'C'],
      compute: vars => ({ W: vars.q * vars.q / (2 * vars.C) })
    },
    {
      name: 'q = sqrt(2 W C)',
      needs: ['W', 'C'],
      compute: vars => ({ q: Math.sqrt(2 * vars.W * vars.C) })
    },
    {
      name: 'C = q² / (2W)',
      needs: ['q', 'W'],
      compute: vars => ({ C: vars.q * vars.q / (2 * vars.W) })
    },

    // W = 1/2 q U
    {
      name: 'Энергия конденсатора. W = 1/2 q U',
      needs: ['q', 'U'],
      compute: vars => ({ W: 0.5 * vars.q * vars.U })
    },
    {
      name: 'q = 2W / U',
      needs: ['W', 'U'],
      compute: vars => ({ q: 2 * vars.W / vars.U })
    },
    {
      name: 'U = 2W / q',
      needs: ['W', 'q'],
      compute: vars => ({ U: 2 * vars.W / vars.q })
    },

    // ========== СОЕДИНЕНИЕ КОНДЕНСАТОРОВ ==========
    
    // Параллельное: C = C1 + C2
    {
      name: 'Параллельное соединение. C = C1 + C2',
      needs: ['C1', 'C2'],
      compute: vars => ({ C: vars.C1 + vars.C2 })
    },
    {
      name: 'C1 = C - C2',
      needs: ['C', 'C2'],
      compute: vars => ({ C1: vars.C - vars.C2 })
    },
    {
      name: 'C2 = C - C1',
      needs: ['C', 'C1'],
      compute: vars => ({ C2: vars.C - vars.C1 })
    },

    // Последовательное: 1/C = 1/C1 + 1/C2
    {
      name: 'Последовательное соединение. 1/C = 1/C1 + 1/C2',
      needs: ['C1', 'C2'],
      compute: vars => ({ C: 1 / (1/vars.C1 + 1/vars.C2) })
    },
    {
      name: 'C1 = C C2 / (C2 - C)',
      needs: ['C', 'C2'],
      compute: vars => ({ C1: vars.C * vars.C2 / (vars.C2 - vars.C) })
    },
    {
      name: 'C2 = C C1 / (C1 - C)',
      needs: ['C', 'C1'],
      compute: vars => ({ C2: vars.C * vars.C1 / (vars.C1 - vars.C) })
    },

    // ========== ЗАКОН ОМА (УЧАСТОК) ==========
    
    // I = U / R
    {
      name: 'Закон Ома (участок). I = U / R',
      needs: ['U', 'R'],
      compute: vars => ({ I: vars.U / vars.R })
    },
    {
      name: 'U = I R',
      needs: ['I', 'R'],
      compute: vars => ({ U: vars.I * vars.R })
    },
    {
      name: 'R = U / I',
      needs: ['U', 'I'],
      compute: vars => ({ R: vars.U / vars.I })
    },

    // ========== ЗАКОН ОМА (ПОЛНАЯ ЦЕПЬ) ==========
    
    // I = E / (R + r)
    {
      name: 'Закон Ома (полная цепь). I = E / (R + r)',
      needs: ['E', 'R', 'r'],
      compute: vars => ({ I: vars.E / (vars.R + vars.r) })
    },
    {
      name: 'E = I (R + r)',
      needs: ['I', 'R', 'r'],
      compute: vars => ({ E: vars.I * (vars.R + vars.r) })
    },
    {
      name: 'R = E / I - r',
      needs: ['E', 'I', 'r'],
      compute: vars => ({ R: vars.E / vars.I - vars.r })
    },
    {
      name: 'r = E / I - R',
      needs: ['E', 'I', 'R'],
      compute: vars => ({ r: vars.E / vars.I - vars.R })
    },

    // ========== СОПРОТИВЛЕНИЕ ПРОВОДНИКА ==========
    
    // R = rho l / S
    {
      name: 'Сопротивление проводника. R = rho l / S',
      needs: ['rho', 'l', 'S'],
      compute: vars => ({ R: vars.rho * vars.l / vars.S })
    },
    {
      name: 'rho = R S / l',
      needs: ['R', 'S', 'l'],
      compute: vars => ({ rho: vars.R * vars.S / vars.l })
    },
    {
      name: 'l = R S / rho',
      needs: ['R', 'S', 'rho'],
      compute: vars => ({ l: vars.R * vars.S / vars.rho })
    },
    {
      name: 'S = rho l / R',
      needs: ['R', 'rho', 'l'],
      compute: vars => ({ S: vars.rho * vars.l / vars.R })
    },

    // ========== РАБОТА ТОКА ==========
    
    // A = I U t
    {
      name: 'Работа тока. A = I U t',
      needs: ['I', 'U', 't'],
      compute: vars => ({ A: vars.I * vars.U * vars.t })
    },
    {
      name: 'I = A / (U t)',
      needs: ['A', 'U', 't'],
      compute: vars => ({ I: vars.A / (vars.U * vars.t) })
    },
    {
      name: 'U = A / (I t)',
      needs: ['A', 'I', 't'],
      compute: vars => ({ U: vars.A / (vars.I * vars.t) })
    },
    {
      name: 't = A / (I U)',
      needs: ['A', 'I', 'U'],
      compute: vars => ({ t: vars.A / (vars.I * vars.U) })
    },

    // ========== МОЩНОСТЬ ТОКА ==========
    
    // P = I U
    {
      name: 'Мощность тока. P = I U',
      needs: ['I', 'U'],
      compute: vars => ({ P: vars.I * vars.U })
    },
    {
      name: 'I = P / U',
      needs: ['P', 'U'],
      compute: vars => ({ I: vars.P / vars.U })
    },
    {
      name: 'U = P / I',
      needs: ['P', 'I'],
      compute: vars => ({ U: vars.P / vars.I })
    },

    // P = I² R
    {
      name: 'Мощность. P = I² R',
      needs: ['I', 'R'],
      compute: vars => ({ P: vars.I * vars.I * vars.R })
    },
    {
      name: 'I = sqrt(P / R)',
      needs: ['P', 'R'],
      compute: vars => ({ I: Math.sqrt(vars.P / vars.R) })
    },
    {
      name: 'R = P / I²',
      needs: ['P', 'I'],
      compute: vars => ({ R: vars.P / (vars.I * vars.I) })
    },

    // P = U² / R
    {
      name: 'Мощность. P = U² / R',
      needs: ['U', 'R'],
      compute: vars => ({ P: vars.U * vars.U / vars.R })
    },
    {
      name: 'U = sqrt(P R)',
      needs: ['P', 'R'],
      compute: vars => ({ U: Math.sqrt(vars.P * vars.R) })
    },
    {
      name: 'R = U² / P',
      needs: ['U', 'P'],
      compute: vars => ({ R: vars.U * vars.U / vars.P })
    },

    // ========== ЗАКОН ДЖОУЛЯ-ЛЕНЦА ==========
    
    // Q = I² R t
    {
      name: 'Закон Джоуля-Ленца. Q = I² R t',
      needs: ['I', 'R', 't'],
      compute: vars => ({ Q: vars.I * vars.I * vars.R * vars.t })
    },
    {
      name: 'I = sqrt(Q / (R t))',
      needs: ['Q', 'R', 't'],
      compute: vars => ({ I: Math.sqrt(vars.Q / (vars.R * vars.t)) })
    },
    {
      name: 'R = Q / (I² t)',
      needs: ['Q', 'I', 't'],
      compute: vars => ({ R: vars.Q / (vars.I * vars.I * vars.t) })
    },
    {
      name: 't = Q / (I² R)',
      needs: ['Q', 'I', 'R'],
      compute: vars => ({ t: vars.Q / (vars.I * vars.I * vars.R) })
    },

    // ========== СОЕДИНЕНИЕ РЕЗИСТОРОВ ==========
    
    // Последовательное: R = R1 + R2
    {
      name: 'Последовательное соединение. R = R1 + R2',
      needs: ['R1', 'R2'],
      compute: vars => ({ R: vars.R1 + vars.R2 })
    },
    {
      name: 'R1 = R - R2',
      needs: ['R', 'R2'],
      compute: vars => ({ R1: vars.R - vars.R2 })
    },
    {
      name: 'R2 = R - R1',
      needs: ['R', 'R1'],
      compute: vars => ({ R2: vars.R - vars.R1 })
    },

    // Параллельное: 1/R = 1/R1 + 1/R2
    {
      name: 'Параллельное соединение. 1/R = 1/R1 + 1/R2',
      needs: ['R1', 'R2'],
      compute: vars => ({ R: 1 / (1/vars.R1 + 1/vars.R2) })
    },
    {
      name: 'R1 = R R2 / (R2 - R)',
      needs: ['R', 'R2'],
      compute: vars => ({ R1: vars.R * vars.R2 / (vars.R2 - vars.R) })
    },
    {
      name: 'R2 = R R1 / (R1 - R)',
      needs: ['R', 'R1'],
      compute: vars => ({ R2: vars.R * vars.R1 / (vars.R1 - vars.R) })
    },

    // ========== КПД ИСТОЧНИКА ==========
    
    // eta = U / E * 100%
    {
      name: 'КПД источника. eta = U / E * 100%',
      needs: ['U', 'E'],
      compute: vars => ({ eta: vars.U / vars.E * 100 })
    },
    {
      name: 'U = eta E / 100',
      needs: ['eta', 'E'],
      compute: vars => ({ U: vars.eta * vars.E / 100 })
    },
    {
      name: 'E = U * 100 / eta',
      needs: ['U', 'eta'],
      compute: vars => ({ E: vars.U * 100 / vars.eta })
    },
  ],
  
    Molecularphysics: [
    // ========== ПОСТОЯННЫЕ (встроены в формулы) ==========
    // k = 1.38e-23 Дж/К (постоянная Больцмана)
    // R = 8.31 Дж/(моль*К) (универсальная газовая постоянная)
    // NA = 6.02e23 моль⁻¹ (постоянная Авогадро)
    // m0 = m / N (масса одной молекулы)

    // ========== ОСНОВНЫЕ ВЕЛИЧИНЫ ==========
    
    // Концентрация: n = N / V
    {
      name: 'Концентрация. n = N / V',
      needs: ['N', 'V'],
      compute: vars => ({ n: vars.N / vars.V })
    },
    {
      name: 'Число молекул. N = n V',
      needs: ['n', 'V'],
      compute: vars => ({ N: vars.n * vars.V })
    },
    {
      name: 'Объём. V = N / n',
      needs: ['N', 'n'],
      compute: vars => ({ V: vars.N / vars.n })
    },

    // Количество вещества: nu = N / NA
    {
      name: 'Количество вещества. nu = N / NA',
      needs: ['N'],
      compute: vars => ({ nu: vars.N / 6.02e23 })
    },
    {
      name: 'Число молекул. N = nu * NA',
      needs: ['nu'],
      compute: vars => ({ N: vars.nu * 6.02e23 })
    },

    // nu = m / M
    {
      name: 'Количество вещества. nu = m / M',
      needs: ['m', 'M'],
      compute: vars => ({ nu: vars.m / vars.M })
    },
    {
      name: 'm = nu M',
      needs: ['nu', 'M'],
      compute: vars => ({ m: vars.nu * vars.M })
    },
    {
      name: 'Молярная масса. M = m / nu',
      needs: ['m', 'nu'],
      compute: vars => ({ M: vars.m / vars.nu })
    },

    // Плотность: rho = m / V
    {
      name: 'Плотность. rho = m / V',
      needs: ['m', 'V'],
      compute: vars => ({ rho: vars.m / vars.V })
    },
    {
      name: 'm = rho V',
      needs: ['rho', 'V'],
      compute: vars => ({ m: vars.rho * vars.V })
    },
    {
      name: 'V = m / rho',
      needs: ['m', 'rho'],
      compute: vars => ({ V: vars.m / vars.rho })
    },

    // Масса молекулы: m0 = m / N
    {
      name: 'Масса молекулы. m0 = m / N',
      needs: ['m', 'N'],
      compute: vars => ({ m0: vars.m / vars.N })
    },
    {
      name: 'm = m0 N',
      needs: ['m0', 'N'],
      compute: vars => ({ m: vars.m0 * vars.N })
    },
    {
      name: 'Количество молекул. N = m / m0',
      needs: ['m', 'm0'],
      compute: vars => ({ N: vars.m / vars.m0 })
    },

    // m0 = M / NA
    {
      name: 'Масса молекулы. m0 = M / NA',
      needs: ['M'],
      compute: vars => ({ m0: vars.M / 6.02e23 })
    },
    {
      name: 'Молярная масса. M = m0 * NA',
      needs: ['m0'],
      compute: vars => ({ M: vars.m0 * 6.02e23 })
    },

        // ========== ОСНОВНОЕ УРАВНЕНИЕ МКТ ==========
    
    // p = n k T
    {
      name: 'Основное ур-е МКТ. p = n k T',
      needs: ['n', 'T'],
      compute: vars => ({ p: vars.n * 1.38e-23 * vars.T })
    },
    {
      name: 'Концентрация. n = p / (k T)',
      needs: ['p', 'T'],
      compute: vars => ({ n: vars.p / (1.38e-23 * vars.T) })
    },
    {
      name: 'Температура. T = p / (n k)',
      needs: ['p', 'n'],
      compute: vars => ({ T: vars.p / (vars.n * 1.38e-23) })
    },

    // p = (1/3) n m0 v²
    {
      name: 'Давление. p = (1/3) n m0 v²',
      needs: ['n', 'm0', 'v2_sq'],
      compute: vars => ({ p: (1/3) * vars.n * vars.m0 * vars.v2_sq })
    },
    {
      name: 'Концентрация. n = 3p / (m0 v²)',
      needs: ['p', 'm0', 'v2_sq'],
      compute: vars => ({ n: 3 * vars.p / (vars.m0 * vars.v2_sq) })
    },
    {
      name: 'Масса молекулы. m0 = 3p / (n v²)',
      needs: ['p', 'n', 'v2_sq'],
      compute: vars => ({ m0: 3 * vars.p / (vars.n * vars.v2_sq) })
    },
    {
      name: 'v² = 3p / (n m0)',
      needs: ['p', 'n', 'm0'],
      compute: vars => ({ v2_sq: 3 * vars.p / (vars.n * vars.m0) })
    },

    // p = (2/3) n Ek
    {
      name: 'Давление газа. p = (2/3) n Ek',
      needs: ['n', 'Ek'],
      compute: vars => ({ p: (2/3) * vars.n * vars.Ek })
    },
    {
      name: 'n = 3p / (2 Ek)',
      needs: ['p', 'Ek'],
      compute: vars => ({ n: 3 * vars.p / (2 * vars.Ek) })
    },
    {
      name: 'Средняя кинетическая энергия молекул. Ek = 3p / (2n)',
      needs: ['p', 'n'],
      compute: vars => ({ Ek: 3 * vars.p / (2 * vars.n) })
    },

    // ========== СРЕДНЯЯ КИНЕТИЧЕСКАЯ ЭНЕРГИЯ ==========
    
    // Ek = (3/2) k T
    {
      name: 'Средняя кинетическая энергия молекул. Ek = (3/2) k T',
      needs: ['T'],
      compute: vars => ({ Ek: 1.5 * 1.38e-23 * vars.T })
    },
    {
      name: 'Температура. T = 2Ek / (3k)',
      needs: ['Ek'],
      compute: vars => ({ T: 2 * vars.Ek / (3 * 1.38e-23) })
    },

    // ========== СКОРОСТЬ МОЛЕКУЛ ==========
    
    // v² = 3kT / m0
    {
      name: 'Квадрат скорости молекул. v² = 3kT / m0',
      needs: ['T', 'm0'],
      compute: vars => ({ v2_sq: 3 * 1.38e-23 * vars.T / vars.m0 })
    },
    {
      name: 'Масса молекулы. m0 = 3kT / v²',
      needs: ['T', 'v2_sq'],
      compute: vars => ({ m0: 3 * 1.38e-23 * vars.T / vars.v2_sq })
    },
    {
      name: 'Температура. T = m0 v² / (3k)',
      needs: ['m0', 'v2_sq'],
      compute: vars => ({ T: vars.m0 * vars.v2_sq / (3 * 1.38e-23) })
    },

    // v = sqrt(3RT / M)
    {
      name: 'Средняя скорость молекул. v = sqrt(3RT / M)',
      needs: ['T', 'M'],
      compute: vars => ({ v: Math.sqrt(3 * 8.31 * vars.T / vars.M) })
    },
    {
      name: 'Молярная масса. M = 3RT / v²',
      needs: ['T', 'v2_sq'],
      compute: vars => ({ M: 3 * 8.31 * vars.T / vars.v2_sq })
    },
    {
      name: 'T = M v² / (3R)',
      needs: ['M', 'v2_sq'],
      compute: vars => ({ T: vars.M * vars.v2_sq / (3 * 8.31) })
    },

    // ========== УРАВНЕНИЕ МЕНДЕЛЕЕВА-КЛАПЕЙРОНА ==========
    
    // pV = nu RT
    {
      name: 'Ур-е состояния. pV = nu RT',
      needs: ['nu', 'T'],
      compute: vars => ({ pV: vars.nu * 8.31 * vars.T })
    },
    {
      name: 'Давление. p = nu RT / V',
      needs: ['nu', 'T', 'V'],
      compute: vars => ({ p: vars.nu * 8.31 * vars.T / vars.V })
    },
    {
      name: 'Объём. V = nu RT / p',
      needs: ['nu', 'T', 'p'],
      compute: vars => ({ V: vars.nu * 8.31 * vars.T / vars.p })
    },
    {
      name: 'Концентрация. nu = pV / (RT)',
      needs: ['p', 'V', 'T'],
      compute: vars => ({ nu: vars.p * vars.V / (8.31 * vars.T) })
    },
    {
      name: 'Температура. T = pV / (nu R)',
      needs: ['p', 'V', 'nu'],
      compute: vars => ({ T: vars.p * vars.V / (vars.nu * 8.31) })
    },

    // pV = (m/M) RT
    {
      name: 'Уравнение Менделеева-Клапейрона. pV = (m/M) RT',
      needs: ['m', 'M', 'T'],
      compute: vars => ({ pV: (vars.m / vars.M) * 8.31 * vars.T })
    },
    {
      name: 'Давление. p = mRT / (MV)',
      needs: ['m', 'M', 'T', 'V'],
      compute: vars => ({ p: vars.m * 8.31 * vars.T / (vars.M * vars.V) })
    },
    {
      name: 'Объём. V = mRT / (Mp)',
      needs: ['m', 'M', 'T', 'p'],
      compute: vars => ({ V: vars.m * 8.31 * vars.T / (vars.M * vars.p) })
    },
    {
      name: 'Масса. m = pVM / (RT)',
      needs: ['p', 'V', 'M', 'T'],
      compute: vars => ({ m: vars.p * vars.V * vars.M / (8.31 * vars.T) })
    },
    {
      name: 'Молярная масса. M = mRT / (pV)',
      needs: ['m', 'T', 'p', 'V'],
      compute: vars => ({ M: vars.m * 8.31 * vars.T / (vars.p * vars.V) })
    },
    {
      name: 'Температура. T = pVM / (mR)',
      needs: ['p', 'V', 'M', 'm'],
      compute: vars => ({ T: vars.p * vars.V * vars.M / (vars.m * 8.31) })
    },

    // ========== ИЗОПРОЦЕССЫ ==========
    
    // Изотермический: p1 V1 = p2 V2 (T = const)
    {
      name: 'Изотермический. p1 V1 = p2 V2',
      needs: ['p1', 'V1', 'p2'],
      compute: vars => ({ V2: vars.p1 * vars.V1 / vars.p2 })
    },
    {
      name: 'p1 = p2 V2 / V1',
      needs: ['p2', 'V2', 'V1'],
      compute: vars => ({ p1: vars.p2 * vars.V2 / vars.V1 })
    },
    {
      name: 'V1 = p2 V2 / p1',
      needs: ['p2', 'V2', 'p1'],
      compute: vars => ({ V1: vars.p2 * vars.V2 / vars.p1 })
    },
    {
      name: 'p2 = p1 V1 / V2',
      needs: ['p1', 'V1', 'V2'],
      compute: vars => ({ p2: vars.p1 * vars.V1 / vars.V2 })
    },
    {
      name: 'V2 = p1 V1 / p2',
      needs: ['p1', 'V1', 'p2'],
      compute: vars => ({ V2: vars.p1 * vars.V1 / vars.p2 })
    },

    // Изобарный: V1 / T1 = V2 / T2 (p = const)
    {
      name: 'Изобарный. V1 / T1 = V2 / T2',
      needs: ['V1', 'T1', 'V2'],
      compute: vars => ({ T2: vars.V2 * vars.T1 / vars.V1 })
    },
    {
      name: 'V1 = V2 T1 / T2',
      needs: ['V2', 'T1', 'T2'],
      compute: vars => ({ V1: vars.V2 * vars.T1 / vars.T2 })
    },
    {
      name: 'T1 = V1 T2 / V2',
      needs: ['V1', 'T2', 'V2'],
      compute: vars => ({ T1: vars.V1 * vars.T2 / vars.V2 })
    },
    {
      name: 'V2 = V1 T2 / T1',
      needs: ['V1', 'T2', 'T1'],
      compute: vars => ({ V2: vars.V1 * vars.T2 / vars.T1 })
    },
    {
      name: 'T2 = V2 T1 / V1',
      needs: ['V2', 'T1', 'V1'],
      compute: vars => ({ T2: vars.V2 * vars.T1 / vars.V1 })
    },

    // Изохорный: p1 / T1 = p2 / T2 (V = const)
    {
      name: 'Изохорный. p1 / T1 = p2 / T2',
      needs: ['p1', 'T1', 'p2'],
      compute: vars => ({ T2: vars.p2 * vars.T1 / vars.p1 })
    },
    {
      name: 'p1 = p2 T1 / T2',
      needs: ['p2', 'T1', 'T2'],
      compute: vars => ({ p1: vars.p2 * vars.T1 / vars.T2 })
    },
    {
      name: 'T1 = p1 T2 / p2',
      needs: ['p1', 'T2', 'p2'],
      compute: vars => ({ T1: vars.p1 * vars.T2 / vars.p2 })
    },
    {
      name: 'p2 = p1 T2 / T1',
      needs: ['p1', 'T2', 'T1'],
      compute: vars => ({ p2: vars.p1 * vars.T2 / vars.T1 })
    },
    {
      name: 'T2 = p2 T1 / p1',
      needs: ['p2', 'T1', 'p1'],
      compute: vars => ({ T2: vars.p2 * vars.T1 / vars.p1 })
    },

    // ========== ВНУТРЕННЯЯ ЭНЕРГИЯ ==========
    
    // U = (3/2) nu RT (одноатомный газ)
    {
      name: 'Внутренняя энергия. U = (3/2) nu RT',
      needs: ['nu', 'T'],
      compute: vars => ({ U: 1.5 * vars.nu * 8.31 * vars.T })
    },
    {
      name: 'Концентрация. nu = 2U / (3RT)',
      needs: ['U', 'T'],
      compute: vars => ({ nu: 2 * vars.U / (3 * 8.31 * vars.T) })
    },
    {
      name: 'Температура. T = 2U / (3 nu R)',
      needs: ['U', 'nu'],
      compute: vars => ({ T: 2 * vars.U / (3 * vars.nu * 8.31) })
    },

    // U = (3/2) N k T
    {
      name: 'Внутренняя энергия. U = (3/2) N k T',
      needs: ['N', 'T'],
      compute: vars => ({ U: 1.5 * vars.N * 1.38e-23 * vars.T })
    },
    {
      name: 'Число молекул. N = 2U / (3kT)',
      needs: ['U', 'T'],
      compute: vars => ({ N: 2 * vars.U / (3 * 1.38e-23 * vars.T) })
    },
    {
      name: 'Температура. T = 2U / (3Nk)',
      needs: ['U', 'N'],
      compute: vars => ({ T: 2 * vars.U / (3 * vars.N * 1.38e-23) })
    },

    // ========== РАБОТА ГАЗА ==========
    
    // A = p ΔV (изобарный процесс)
    {
      name: 'Работа газа. A = p ΔV',
      needs: ['p', 'V1', 'V2'],
      compute: vars => ({ A: vars.p * (vars.V2 - vars.V1) })
    },
    {
      name: 'p = A / (V2 - V1)',
      needs: ['A', 'V1', 'V2'],
      compute: vars => ({ p: vars.A / (vars.V2 - vars.V1) })
    },
    {
      name: 'V2 = A / p + V1',
      needs: ['A', 'p', 'V1'],
      compute: vars => ({ V2: vars.A / vars.p + vars.V1 })
    },
    {
      name: 'V1 = V2 - A / p',
      needs: ['V2', 'A', 'p'],
      compute: vars => ({ V1: vars.V2 - vars.A / vars.p })
    },

    // A = nu R ΔT
    {
      name: 'Работа газа. A = nu R ΔT',
      needs: ['nu', 'T1', 'T2'],
      compute: vars => ({ A: vars.nu * 8.31 * (vars.T2 - vars.T1) })
    },
    {
      name: 'nu = A / (R ΔT)',
      needs: ['A', 'T1', 'T2'],
      compute: vars => ({ nu: vars.A / (8.31 * (vars.T2 - vars.T1)) })
    },
    {
      name: 'T2 = A / (nu R) + T1',
      needs: ['A', 'nu', 'T1'],
      compute: vars => ({ T2: vars.A / (vars.nu * 8.31) + vars.T1 })
    },
    {
      name: 'T1 = T2 - A / (nu R)',
      needs: ['T2', 'A', 'nu'],
      compute: vars => ({ T1: vars.T2 - vars.A / (vars.nu * 8.31) })
    },

    // ========== ПЕРВОЕ НАЧАЛО ТЕРМОДИНАМИКИ ==========
    
    // Q = ΔU + A
    {
      name: 'Первое начало термодинамики. Q = ΔU + A',
      needs: ['dU', 'A'],
      compute: vars => ({ Q: vars.dU + vars.A })
    },
    {
      name: 'Изменение внутренней энергии. ΔU = Q - A',
      needs: ['Q', 'A'],
      compute: vars => ({ dU: vars.Q - vars.A })
    },
    {
      name: 'Работа. A = Q - ΔU',
      needs: ['Q', 'dU'],
      compute: vars => ({ A: vars.Q - vars.dU })
    },

    // ========== КПД ТЕПЛОВОГО ДВИГАТЕЛЯ ==========
    
    // eta = (Q1 - Q2) / Q1 * 100%
    {
      name: 'КПД. eta = (Q1 - Q2) / Q1 * 100%',
      needs: ['Q1', 'Q2'],
      compute: vars => ({ eta: (vars.Q1 - vars.Q2) / vars.Q1 * 100 })
    },
    {
      name: 'Q1 = Q2 / (1 - eta/100)',
      needs: ['Q2', 'eta'],
      compute: vars => ({ Q1: vars.Q2 / (1 - vars.eta / 100) })
    },
    {
      name: 'Q2 = Q1 (1 - eta/100)',
      needs: ['Q1', 'eta'],
      compute: vars => ({ Q2: vars.Q1 * (1 - vars.eta / 100) })
    },

    // eta = (T1 - T2) / T1 * 100% (Карно)
    {
      name: 'КПД Карно. eta = (T1 - T2) / T1 * 100%',
      needs: ['T1', 'T2'],
      compute: vars => ({ eta: (vars.T1 - vars.T2) / vars.T1 * 100 })
    },
    {
      name: 'T1 = T2 / (1 - eta/100)',
      needs: ['T2', 'eta'],
      compute: vars => ({ T1: vars.T2 / (1 - vars.eta / 100) })
    },
    {
      name: 'T2 = T1 (1 - eta/100)',
      needs: ['T1', 'eta'],
      compute: vars => ({ T2: vars.T1 * (1 - vars.eta / 100) })
    },
  ],
  
    Optics: [
    // ========== ПОСТОЯННЫЕ (встроены в формулы) ==========
    // c = 3e8 м/с (скорость света в вакууме)

    // ========== ЗАКОН ПРЕЛОМЛЕНИЯ (СНЕЛЛИУСА) ==========
    
    // n1 sin(alpha) = n2 sin(beta)
    {
      name: 'Закон преломления. n1 sin(α) = n2 sin(β)',
      needs: ['n1', 'alpha', 'n2'],
      compute: vars => ({ beta: Math.asin(vars.n1 * Math.sin(vars.alpha * Math.PI / 180) / vars.n2) * 180 / Math.PI })
    },
    {
      name: 'n1 = n2 sin(β) / sin(α)',
      needs: ['n2', 'beta', 'alpha'],
      compute: vars => ({ n1: vars.n2 * Math.sin(vars.beta * Math.PI / 180) / Math.sin(vars.alpha * Math.PI / 180) })
    },
    {
      name: 'n2 = n1 sin(α) / sin(β)',
      needs: ['n1', 'alpha', 'beta'],
      compute: vars => ({ n2: vars.n1 * Math.sin(vars.alpha * Math.PI / 180) / Math.sin(vars.beta * Math.PI / 180) })
    },
    {
      name: 'sin(α) = n2 sin(β) / n1',
      needs: ['n2', 'beta', 'n1'],
      compute: vars => ({ alpha: Math.asin(vars.n2 * Math.sin(vars.beta * Math.PI / 180) / vars.n1) * 180 / Math.PI })
    },

    // n21 = sin(alpha) / sin(beta)
    {
      name: 'Показатель преломления среды относительно другой.мn21 = sin(α) / sin(β)',
      needs: ['alpha', 'beta'],
      compute: vars => ({ n21: Math.sin(vars.alpha * Math.PI / 180) / Math.sin(vars.beta * Math.PI / 180) })
    },
    {
      name: 'sin(α) = n21 sin(β)',
      needs: ['n21', 'beta'],
      compute: vars => ({ alpha: Math.asin(vars.n21 * Math.sin(vars.beta * Math.PI / 180)) * 180 / Math.PI })
    },
    {
      name: 'sin(β) = sin(α) / n21',
      needs: ['alpha', 'n21'],
      compute: vars => ({ beta: Math.asin(Math.sin(vars.alpha * Math.PI / 180) / vars.n21) * 180 / Math.PI })
    },

    // ========== ПОКАЗАТЕЛЬ ПРЕЛОМЛЕНИЯ ==========
    
    // n = c / v
    {
      name: 'Показатель преломления. n = c / v',
      needs: ['v'],
      compute: vars => ({ n: 3e8 / vars.v })
    },
    {
      name: 'Скорость. v = c / n',
      needs: ['n'],
      compute: vars => ({ v: 3e8 / vars.n })
    },

    // n21 = n2 / n1
    {
      name: 'Показатель преломления. n21 = n2 / n1',
      needs: ['n2', 'n1'],
      compute: vars => ({ n21: vars.n2 / vars.n1 })
    },
    {
      name: 'n2 = n21 n1',
      needs: ['n21', 'n1'],
      compute: vars => ({ n2: vars.n21 * vars.n1 })
    },
    {
      name: 'n1 = n2 / n21',
      needs: ['n2', 'n21'],
      compute: vars => ({ n1: vars.n2 / vars.n21 })
    },

    // n21 = v1 / v2
    {
      name: 'Показатель преломления. n21 = v1 / v2',
      needs: ['v1', 'v2'],
      compute: vars => ({ n21: vars.v1 / vars.v2 })
    },
    {
      name: 'v1 = n21 v2',
      needs: ['n21', 'v2'],
      compute: vars => ({ v1: vars.n21 * vars.v2 })
    },
    {
      name: 'v2 = v1 / n21',
      needs: ['v1', 'n21'],
      compute: vars => ({ v2: vars.v1 / vars.n21 })
    },

    // ========== ФОРМУЛА ТОНКОЙ ЛИНЗЫ ==========
    
    // 1/F = 1/d + 1/f
    {
      name: 'Формула линзы. 1/F = 1/d + 1/f',
      needs: ['d', 'f'],
      compute: vars => ({ F: 1 / (1/vars.d + 1/vars.f) })
    },
    {
      name: '1/d = 1/F - 1/f',
      needs: ['F', 'f'],
      compute: vars => ({ d: 1 / (1/vars.F - 1/vars.f) })
    },
    {
      name: '1/f = 1/F - 1/d',
      needs: ['F', 'd'],
      compute: vars => ({ f: 1 / (1/vars.F - 1/vars.d) })
    },

    // ========== ОПТИЧЕСКАЯ СИЛА ==========
    
    // D = 1/F
    {
      name: 'Оптическая сила. D = 1/F',
      needs: ['F'],
      compute: vars => ({ D: 1 / vars.F })
    },
    {
      name: 'F = 1/D',
      needs: ['D'],
      compute: vars => ({ F: 1 / vars.D })
    },

    // D = 1/d + 1/f
    {
      name: 'Оптическая сила. D = 1/d + 1/f',
      needs: ['d', 'f'],
      compute: vars => ({ D: 1/vars.d + 1/vars.f })
    },
    {
      name: '1/d = D - 1/f',
      needs: ['D', 'f'],
      compute: vars => ({ d: 1 / (vars.D - 1/vars.f) })
    },
    {
      name: '1/f = D - 1/d',
      needs: ['D', 'd'],
      compute: vars => ({ f: 1 / (vars.D - 1/vars.d) })
    },

    // ========== ЛИНЕЙНОЕ УВЕЛИЧЕНИЕ ==========
    
    // Г = H / h
    {
      name: 'Линейное увеличение. Г = H / h',
      needs: ['H', 'h'],
      compute: vars => ({ Gamma: vars.H / vars.h })
    },
    {
      name: 'H = Г h',
      needs: ['Gamma', 'h'],
      compute: vars => ({ H: vars.Gamma * vars.h })
    },
    {
      name: 'h = H / Г',
      needs: ['H', 'Gamma'],
      compute: vars => ({ h: vars.H / vars.Gamma })
    },

    // Г = f / d
    {
      name: 'Линейное увеличение. Г = f / d',
      needs: ['f', 'd'],
      compute: vars => ({ Gamma: vars.f / vars.d })
    },
    {
      name: 'f = Г d',
      needs: ['Gamma', 'd'],
      compute: vars => ({ f: vars.Gamma * vars.d })
    },
    {
      name: 'd = f / Г',
      needs: ['f', 'Gamma'],
      compute: vars => ({ d: vars.f / vars.Gamma })
    },

    // ========== СФЕРИЧЕСКОЕ ЗЕРКАЛО ==========
    
    
    // 1/F = 1/d + 1/f (зеркало)
    {
      name: 'Зеркало. 1/F = 1/d + 1/f',
      needs: ['d', 'f'],
      compute: vars => ({ F: 1 / (1/vars.d + 1/vars.f) })
    },
    {
      name: '1/d = 1/F - 1/f',
      needs: ['F', 'f'],
      compute: vars => ({ d: 1 / (1/vars.F - 1/vars.f) })
    },
    {
      name: '1/f = 1/F - 1/d',
      needs: ['F', 'd'],
      compute: vars => ({ f: 1 / (1/vars.F - 1/vars.d) })
    },

    // ========== СВЯЗЬ ДЛИНЫ ВОЛНЫ, ЧАСТОТЫ И СКОРОСТИ ==========
    
    
    {
      name: 'Длина волны. lambda = c / nu',
      needs: ['nu'],
      compute: vars => ({ lambda: 3e8 / vars.nu })
    },
    {
      name: 'Частота. nu = c / lambda',
      needs: ['lambda'],
      compute: vars => ({ nu: 3e8 / vars.lambda })
    },

    // v = lambda nu (в среде)
    {
      name: 'Скорость. v = λ ν',
      needs: ['lambda', 'nu'],
      compute: vars => ({ v: vars.lambda * vars.nu })
    },
    {
      name: 'Длина волны. lambda = v / nu',
      needs: ['v', 'nu'],
      compute: vars => ({ lambda: vars.v / vars.nu })
    },
    {
      name: 'Частота. nu = v / lambda',
      needs: ['v', 'lambda'],
      compute: vars => ({ nu: vars.v / vars.lambda })
    },

    // ========== ИНТЕРФЕРЕНЦИЯ ==========
    
    // Условие максимумов: Δ = m lambda
    {
      name: 'Максимумы. Δ = m λ',
      needs: ['m', 'lambda'],
      compute: vars => ({ delta: vars.m * vars.lambda })
    },
    {
      name: 'm = Δ / λ',
      needs: ['delta', 'lambda'],
      compute: vars => ({ m: vars.delta / vars.lambda })
    },
    {
      name: 'lambda = Δ / m',
      needs: ['delta', 'm'],
      compute: vars => ({ lambda: vars.delta / vars.m })
    },

    // h = lambda L / d (расстояние между максимумами)
    {
      name: 'Расстояние между максимумами. h = λ L / d',
      needs: ['lambda', 'L', 'd'],
      compute: vars => ({ h: vars.lambda * vars.L / vars.d })
    },
    {
      name: 'Длина волны. lambda = h d / L',
      needs: ['h', 'd', 'L'],
      compute: vars => ({ lambda: vars.h * vars.d / vars.L })
    },
    {
      name: 'Расстояние от решётки до экрана.L = h d / lambda',
      needs: ['h', 'd', 'lambda'],
      compute: vars => ({ L: vars.h * vars.d / vars.lambda })
    },
    {
      name: 'Период решётки. d = lambda L / h',
      needs: ['lambda', 'L', 'h'],
      compute: vars => ({ d: vars.lambda * vars.L / vars.h })
    },

    // ========== ДИФРАКЦИОННАЯ РЕШЁТКА ==========
    
    // d sin(phi) = m lambda
    {
      name: 'Решётка. d sin(φ) = m λ',
      needs: ['d_grat', 'phi', 'm'],
      compute: vars => ({ lambda: vars.d_grat * Math.sin(vars.phi * Math.PI / 180) / vars.m })
    },
    {
      name: 'Период. d = m lambda / sin(φ)',
      needs: ['m', 'lambda', 'phi'],
      compute: vars => ({ d_grat: vars.m * vars.lambda / Math.sin(vars.phi * Math.PI / 180) })
    },
    {
      name: 'm = d sin(φ) / lambda',
      needs: ['d_grat', 'phi', 'lambda'],
      compute: vars => ({ m: vars.d_grat * Math.sin(vars.phi * Math.PI / 180) / vars.lambda })
    },
    {
      name: 'sin(φ) = m lambda / d',
      needs: ['m', 'lambda', 'd_grat'],
      compute: vars => ({ phi: Math.asin(vars.m * vars.lambda / vars.d_grat) * 180 / Math.PI })
    },

    // ========== ПЕРИОД И ЧАСТОТА ==========
    
    // nu = 1 / T
    {
      name: 'Частота. ν = 1 / T',
      needs: ['t'],
      compute: vars => ({ nu: 1 / vars.t })
    },
    {
      name: 'Период. T = 1 / ν',
      needs: ['nu'],
      compute: vars => ({ t: 1 / vars.nu })
    },

    // ========== ФОРМУЛА ШЛИФОВЩИКА ЛИНЗ ==========
    
    // 1/F = (n - 1)(1/R1 - 1/R2)
    {
      name: 'Формула шлифовщика. 1/F = (n - 1)(1/R1 - 1/R2)',
      needs: ['n', 'R1', 'R2'],
      compute: vars => ({ F: 1 / ((vars.n - 1) * (1/vars.R1 - 1/vars.R2)) })
    },
    {
      name: 'n = 1 / (F(1/R1 - 1/R2)) + 1',
      needs: ['F', 'R1', 'R2'],
      compute: vars => ({ n: 1 / (vars.F * (1/vars.R1 - 1/vars.R2)) + 1 })
    },
    {
      name: '1/R1 - 1/R2 = 1 / (F(n - 1))',
      needs: ['F', 'n'],
      compute: vars => ({ R_diff: 1 / (vars.F * (vars.n - 1)) })
    },

    // ========== ОПТИЧЕСКАЯ СИЛА СИСТЕМЫ ЛИНЗ ==========
    
    // D = D1 + D2
    {
      name: 'Оптическая сила системы. D = D1 + D2',
      needs: ['D1', 'D2'],
      compute: vars => ({ D: vars.D1 + vars.D2 })
    },
    {
      name: 'D1 = D - D2',
      needs: ['D', 'D2'],
      compute: vars => ({ D1: vars.D - vars.D2 })
    },
    {
      name: 'D2 = D - D1',
      needs: ['D', 'D1'],
      compute: vars => ({ D2: vars.D - vars.D1 })
    },

        // 1/F = 1/F1 + 1/F2
    {
      name: '1/F = 1/F1 + 1/F2',
      needs: ['F1', 'F2'],
      compute: vars => ({ F: 1 / (1/vars.F1 + 1/vars.F2) })
    },
    {
      name: 'F1 = F F2 / (F2 - F)',
      needs: ['F', 'F2'],
      compute: vars => ({ F1: vars.F * vars.F2 / (vars.F2 - vars.F) })
    },
    {
      name: 'F2 = F F1 / (F1 - F)',
      needs: ['F', 'F1'],
      compute: vars => ({ F2: vars.F * vars.F1 / (vars.F1 - vars.F) })
    },
  ],
};


//Конвертер

const openConverterButton =
  document.getElementById('openConverterButton');

const blockConverter =
  document.getElementById('blockConverter');

const converter =
  document.getElementById('converter');

const convertValue =
  document.getElementById('convertValue');

const convertTo =
  document.getElementById('convertTo');

const convertSection =
  document.getElementById('convertSection');

const convertresults =
  document.getElementById('convertresults');

const converterresinput =
  document.getElementById('converterresinput');
  
  
//открыть закрыть конвертер
openConverterButton.addEventListener('click', function () {
  converter.classList.remove('hidden');
  
  openConverterButton.classList.add('hidden');
});

blockConverter.addEventListener('click', function () {
  converter.classList.add('hidden');
  
  openConverterButton.classList.remove('hidden');
});



const unitBases = {
    
    length: {
        units: ['mm', 'cm', 'dm', 'm', 'km', 'ft', 'nm', 'mkm', 'mil'],
        toBase: {
            'mm': 0.001, 'cm': 0.01, 'dm': 0.1, 'm': 1, 'km': 1000,
             'ft': 0.3048, 'nm': 1e-9, 'mkm': 1e-6, 'mil': 1609.344
        }
    },


    area: {
        units: ['mm2', 'cm2', 'dm2', 'm2', 'km2', 'ft2', 'nm2', 'mkm2', 'mil2'],
        toBase: {
            'mm2': 0.000001, 'cm2': 0.0001, 'dm2': 0.01, 'm2': 1, 'km2': 1000000, 'ft2': 0.092903, 'nm2': 1e-18, 'mkm2': 1e-12, 'mil2': 2589988
        }
    },

    // 3. ОБЪЁМ (м³)
    volume: {
        units: ['mm3', 'cm3', 'dm3', 'm3', 'l', 'ml', 'ft3', 'nm3', 'mkm3', 'mil3'],
        toBase: {
            'mm3': 1e-9, 'cm3': 0.000001, 'dm3': 0.001, 'm3': 1,
            'l': 0.001, 'ml': 0.000001, 'ft3': 0.0283168, 'nm3': 1e-27, 'mkm3': 1e-18, 'mil3': 4.168e9
        }
    },

    // 4. МАССА (килограммы)
    mass: {
        units: ['mkg', 'mg', 'g', 'kg', 't', 'lb'],
        toBase: {
            'mkg': 1e-9, 'mg': 0.000001, 'g': 0.001, 'kg': 1, 't': 1000,
            'lb': 0.453592
       }
    },

    
    time: {
        units: ['ms', 's', 'min', 'h', 'day', 'week', 'month', 'year'],
        toBase: {
            'ms': 0.001, 's': 1, 'min': 60, 'h': 3600,
            'day': 86400, 'week': 604800, 'month': 2629800, 'year': 31557600
        }
    },

    // 6. СКОРОСТЬ (м/с)
    speed: {
        units: ['mps', 'kmph', 'mph', 'fts' ],
        toBase: {
            'mps': 1, 'kmph': 0.277778, 'mph': 0.44704, 'fts': 0.3048
            
        }
    },

    // 7. ТЕМПЕРАТУРА
    temperature: {
        units: ['C', 'F', 'K'],
        
        convert: function(value, from, to) {
            
            let kelvin;
            if (from === 'C') kelvin = value + 273.15;
            else if (from === 'F') kelvin = (value + 459.67) * 5/9;
            else if (from === 'K') kelvin = value;

            
            if (to === 'C') return kelvin - 273.15;
            else if (to === 'F') return kelvin * 9/5 - 459.67;
            else if (to === 'K') return kelvin;
        }
    },

    // 8. ДАВЛЕНИЕ (Паскали)
    pressure: {
        units: ['Pa', 'kPa', 'MPa', 'bar', 'mbar', 'atm', 'mmHg'],
        toBase: {
            'Pa': 1, 'kPa': 1000, 'MPa': 1000000,
            'bar': 100000, 'mbar': 100, 'atm': 101325, 'mmHg': 133.322
        }
    },

    // 9. ЭНЕРГИЯ (Джоули)
    energy: {
        units: ['J', 'kJ', 'MJ', 'cal', 'kcal', 'Wh', 'kWh', 'eV'],
        toBase: {
            'J': 1, 'kJ': 1000, 'MJ': 1000000,
            'cal': 4.184, 'kcal': 4184,
            'Wh': 3600, 'kWh': 3600000,
            'eV': 1.602e-19
        }
    },


    // 11. ЧАСТОТА (Герцы)
    frequency: {
        units: ['Hz', 'kHz', 'MHz', 'GHz', 'rpm', 'rps'],
        toBase: {
            'Hz': 1, 'kHz': 1000, 'MHz': 1e6, 'GHz': 1e9,
            'rpm': 1/60, 'rps': 1
        }
    },

    // 12. УГОЛ (радианы)
    angle: {
        units: ['rad', 'deg', 'grad', 'turn'],
        toBase: {
            'rad': 1, 'deg': Math.PI/180, 'grad': Math.PI/200, 'turn': 2*Math.PI
        }
    }
};


const unitLabels = {
  mm: 'мм',
  cm: 'см',
  dm: 'дм',
  m: 'м',
  km: 'км',
  ft: 'фут',
  nm: 'нм',
  mkm: 'мкм',
  mil: 'миля',

  mm2: 'мм²',
  cm2: 'см²',
  dm2: 'дм²',
  m2: 'м²',
  km2: 'км²',
  ft2: 'фут²',
  nm2: 'нм²',
  mkm2: 'мкм²',
  mil2: 'миля²',

  mm3: 'мм³',
  cm3: 'см³',
  dm3: 'дм³',
  m3: 'м³',
  l: 'л',
  ml: 'мл',
  ft3: 'фут³',
  nm3: 'нм³',
  mkm3: 'мкм³',
  mil3: 'миля³',

  mkg: 'мкг',
  mg: 'мг',
  g: 'г',
  kg: 'кг',
  t: 'т',
  lb: 'фунт',

  ms: 'мс',
  s: 'с',
  min: 'мин',
  h: 'ч',
  day: 'день',
  week: 'неделя',
  month: 'месяц',
  year: 'год',

  mps: 'м/с',
  kmph: 'км/ч',
  mph: 'миль/ч',
  fts: 'фут/с',

  C: '°C',
  F: '°F',
  K: 'K',

  Pa: 'Па',
  kPa: 'кПа',
  MPa: 'МПа',
  bar: 'бар',
  mbar: 'мбар',
  atm: 'атм',
  mmHg: 'мм рт. ст.',

  J: 'Дж',
  kJ: 'кДж',
  MJ: 'МДж',
  cal: 'кал',
  kcal: 'ккал',
  Wh: 'Вт·ч',
  kWh: 'кВт·ч',
  eV: 'эВ',

  Hz: 'Гц',
  kHz: 'кГц',
  MHz: 'МГц',
  GHz: 'ГГц',
  rpm: 'об/мин',
  rps: 'об/с',

  rad: 'рад',
  deg: '°',
  grad: 'град',
  turn: 'оборот'
};




//заполнение единиц


function fillConverterUnits() {
  const section = convertSection.value;
  const units = unitBases[section].units;

  convertTo.innerHTML = '';

  for (const unitCode of units) {
    const option = document.createElement('option');

    option.value = unitCode;
    
    option.textContent = unitLabels[unitCode];

    convertTo.appendChild(option);
  }
}
fillConverterUnits();

convertSection.addEventListener(
  'change',
  fillConverterUnits
);


//перевод во все единицы


convertresults.addEventListener('click', function () {
  const value = Number(convertValue.value);

  if (!Number.isFinite(value)) {
    converterresinput.textContent = 'Введите число';
    return;
  }

  const section = convertSection.value;
  const selectedUnit = convertTo.value;
  const sectionData = unitBases[section];

  converterresinput.innerHTML = '';

  if (section === 'temperature') {
    for (const unitCode of sectionData.units) {
      const result = sectionData.convert(
        value,
        selectedUnit,
        unitCode
      );

      const resultLine = document.createElement('div');

      resultLine.textContent =
        `${result.toLocaleString('ru-RU', {
          maximumFractionDigits: 6
        })} ${unitLabels[unitCode]}`;

      converterresinput.appendChild(resultLine);
    }

    return;
  }

  const units = sectionData.units;
  const toBase = sectionData.toBase;

  const valueInBase =
    value * toBase[selectedUnit];

  for (const unitCode of units) {
    const result =
      valueInBase / toBase[unitCode];

    const resultLine = document.createElement('div');

    resultLine.textContent =
      `${result.toLocaleString('ru-RU', {
        maximumFractionDigits: 6
      })} ${unitLabels[unitCode]}`;

    converterresinput.appendChild(resultLine);
  }
});





/* =========================================
   БАНК УТВЕРЖДЕНИЙ
   ========================================= */

const theoryBank = [
  {
    text: "При равномерном прямолинейном движении ускорение тела равно нулю.",
    correct: true,
    explanation:
      "При равномерном прямолинейном движении скорость не изменяется, поэтому ускорение равно нулю."
  },
  { text: "При равномерном движении по окружности ускорение тела равно нулю.",
  correct: false ,
  explanation: 
  "При равномерном движении по окружности скорость неизменна по модулю, но изменяется по направлению, значит тело движется с ускорением."
  },
    { text: "На все заряженные частицы в магнитном поле действует сила Лоренца.",
  correct: false ,
  explanation:
  "Сила Лоренца действует только на движущися заряженные частицы в магнитном поле."
  },
  { text: "Вес тела равен массе, умноженной на ускорение свободного падения",
  correct: false ,
  explanation:
  "Вес тела по модулю равен силе реакции опоры."
  },
    { text: "В инерциальных системах отсчета тело находится в равновесии, либо движется прямолинейно и равномерно, пока на него не действуют никакие силы, либо действие этих сил скомпенсировано.",
  correct: true,
  explanation:
  "Сумма сил, действующих на тело, равна произведению массы на ускорение."
  },
      { text: "В изохорном процессе давление зависит только от температуры.",
  correct: true,
  explanation:
  "Изопроцессы описываются уравнением Менделеева-Клапейрона, согласно которому p = νrT : v, где объем и количество вещества постоянны."
  },
        { text: "Поступательное движение - движение, при котором тело движется по прямой траектории.",
  correct: false,
  explanation:
  "Поступательное движение - движение системы точек абсолютно твердого тела, при котором отрезок, соединяющий любые 2 точки этого тела, остается параллельным самому себе в любой предыдущий момент времени."
  },
      { text: "Векторная сумма сил, действующих на тело, всегда сонаправлена с ускорением, которое это тело приобретает.",
  correct: true,
  explanation:
  "Векторная сумма сил, действующих на тело, равна массе этого тела, умноженного на ускорение (вектор)."
  },
  
        { text: "После броска тела под углом к горизонту проекции его ускорения на обе оси имеют один знак.",
  correct: false ,
  explanation:
  "После броска тела под углом к горизонту оно движется с ускорением по вертикальной оси, равномерно по горизонтальной."
  },
        { text: "Силы взаимодействия двух материальных точек равны по величине, противоположны по направлению, действуют вдоль прямой, соединяющей эти материальные точки, имеют одну природу.",
  correct: true,
  explanation:
  "3 закон Ньютона."
  },
        { text: "Инертность - способность тела сопротивляться изменению его формы.",
  correct: false ,
  explanation:
  "Инертность - способность тела сопротивляться изменению его скорости."
  },
        { text: "Сила трения равна коэффициенту трения, умноженного на силу реакции опоры.",
  correct: false,
  explanation:
  "Сила трения скольжения равна μN, сила трения покоя меньше этого значения, не имеет формулы."
  },
        { text: "Сила упругости направлена против деформации",
  correct: true,
  explanation:
  "Закон Гука: Fупр = -k∆x."
  },
        { text: "Сила натяжения нити имеет электромагнитную природу.",
  correct: true ,
  explanation:
  "Сила натяжения нити возникает из-за взаимодействия атомов и молекул вещества."
  },
        { text: "Тело не совершает вращательное движение, если сумма моментов всех сил, действующих на него, равна нулю относительно любой оси вращения",
  correct: true ,
  explanation:
  "Правило моментов сил."
  },
        { text: "Линии действия трех сил, непараллельных друг другу, пересекаются в одной точке, если тело в равновесии.",
  correct: true,
  explanation:
  "Теорема о трех непараллельных силах."
  },
        { text: "Коэффициент трения зависит от массы тела",
  correct: false,
  explanation:
  "Коэффициент трения зависит только от материала поверхности."
  },
        { text: "Если коэффициент трения меньше чем тангенс угла наклона плоскости,на которой находится тело, то оно находится в равновесии.",
  correct: false,
  explanation:
  "Если тангенс угла наклона плоскости, на которой находится тело, больше чем коэффициент трения - тело скользит."
  },      
  
  { 
    text: "Ускорение тела при скольжении его по наклонной плоскости не зависит от массы.",
  correct: true ,
  explanation:
  "a = g(sina-μcosa) при скольжении вниз, a = g(μcosa+sina) при скольжении вверх."
  },      
  { text: "Если тела связаны невесомой нерастяжимой нитью, перекинутой через подвижный блок, то ускорение тела, прикрепленного к центру блока, будет в 2 раза меньше ускорения тела, прикрепленного к концу нити.",
  correct: true ,
  explanation:
  "Если тела связаны нитью, перекинутой через подвижный блок - перемещение конца нити в 2 раза больше перемещения центра блока."
  },     
  { text: "Импульсом силы называется величина, равная произведению силы, действующей на тело, на время ее действия.",
  correct:true ,
  explanation:
  "Второй закон Ньютона в импульсной форме."
  },     
  { text: "В любой системе тел действует закон сохранения импульса.",
  correct: false,
  explanation:
  "Закон сохранения импульса применяется для систем тел, если сумма внешних сил, действующих на систему, равна нулю."
  },
        { text: "Общая сумма потенциальной и кинетической энергии тела остается неизменной, если действуют только силы упругости и тяготения(потенциальные силы), а сила трения и сопротивления среды (непотенциальные) отсутствуют.",
  correct:true ,
  explanation:
  "Закон сохранения энергии."
  },
        { text: "Все тела состоят из частиц, которые постоянно хаотично движутся и взаимодействуют между собой. ",
  correct:true ,
  explanation:
  "Основные положения молекулярно-кинетической теории."
  },
        { text: "Конвекция - передача тепла через касание.",
  correct: false,
  explanation:
  "Конвекция- перемешивание холодного и горячего воздуха, связанное с подъемом более горячего воздуха и опусканием более холодного."
  },
        { text: "Температура - мера возможности тела или вещества влиять на окружающее пространство путем передачи тепловой энергии.",
  correct: false,
  explanation:
  "Температура - скорость движения частиц."
  },
        { text: "При изохорном нагревании газ получает тепло.",
  correct: true,
  explanation:
  "Количество теплоты, полученное газом, идет на совершение работы и изменение внутренней энергии газа. В изохорном процессе работа газа равна нулю, при нагревании внутренняя энергия больше нуля."
  },
        { text: "В изобарном процессе произведение давления газа и его объема - постоянная величина.",
  correct: false ,
  explanation:
  "В изобарном процессе отношение объема газа к его температуре - постоянная величина."
  },
        { text: "При адиабатном нагревании газа он всегда отдает тепло.",
  correct: true,
  explanation:
  "При адиабатном нагревании газа изменение его внутренней энергии положительно без теплообмена (Q = 0), значит работа газа меньше нуля. Q = A + ∆U."
  },
        { text: "Если сила, действующая на тело, перпендикулярна вектору его перемещения, она не совершает работу.",
  correct: true ,
  explanation:
  "A = FScosa, где a - угол между вектором перемещения и силой."
  },
        { text: "Носителями заряда в полупроводниках являются заряженные частицы.",
  correct: false,
  explanation:
  "Носителями заряда в полупроводниках являются электроны и дырки."
  },
        { text: "Не существуют материалов, сопротивление которых равно нулю.",
  correct:false ,
  explanation:
  "Существуют сверхпроводники, сопротивление которых падает до нуля при охлаждении ниже определенной критической температуры. "
  },
        { text: "Линии магнитной индукции имеют начало со стороны северного полюса магнита и конец на стороне южного полюса.",
  correct:false ,
  explanation:
  "Линии магнитной индукции замкнутые. "
  },
        { text: "Сила Ампера действует на любые проводники, так как в них постоянно хаотично движутся электроны, на каждый из которых действует сила Лоренца.",
  correct: false ,
  explanation:
  "Сумма всех сил Лоренца, действующих на электроны в проводнике без тока, равна нулю, так как они все движутся неупорядоченно."
  },
        { text: "Полное внутреннее отражение может произойти только если свет распространяется из среды с большим показателем преломления в среду с меньшим показателем преломления.",
  correct: true,
  explanation:
  "Условие полного внутреннего отражения(отражения света от границы раздела сред)."
  },
        { text: "Если разместить предмет в фокусе линзы, она даст мнимое изображение.",
  correct: false,
  explanation:
  "Если разместить предмет в фокусе линзы, она не даст изображения."
  },
        { text: "При переходе света из одной среды в другую, его длина волны не изменяется.",
  correct: false,
  explanation:
  "При переходе света из одной среды в другую, меняется скорость света и длина волны, а частота остается постоянной."
  },
        { text: "Интерференция света - огибание светом препятствий.",
  correct:false ,
  explanation:
  "Интерференция света - сложение когерентных волн. "
        },
        { text: "При торможении тела проекция его скорости отрицательна.",
  correct: false ,
  explanation:
  "При торможении тела проекция его скорости направлена против ускорения."
  },
        { text: "В замкнутом проводящем контуре возникает ток при изменении числа линий магнитной индукции, пронизывающих поверхность, ограниченную этим контуром.",
  correct: true ,
  explanation:
  "в замкнутом контуре возникает электродвижущая сила, которая равна скорости изменения магнитного потока через этот контур со знаком минус."
  },
        { text: "Кинетическая энергия заряженной частицы изменяется за счет силы Лоренца, действующей на нее.",
  correct: false,
  explanation:
  "Сила Лоренца не меняет модуль скорости, только ее направление, значит не меняет кинетическую энергию."
  },
        { text: "Если тело бросить вертикально вверх, в верхней точке траектории его ускорение равно нулю.",
  correct: false ,
  explanation:
  "В верхней точке траектории на тело действует ускорение свободного падения, направленное вниз."
  },
        { text: "При движении автомобиля по выпуклому мосту, в верхней точке моста вес водителя неизменен в сравнении с движением по горизонтальной части дороги. ",
  correct: false,
  explanation:
  "На выпуклом мосту часть силы тяжести идёт на создание центростремительного ускорения, поэтому вес меньше: P = mg - mv²/R."
  },
  {
  text: "КПД теплового двигателя может быть равен 100%, если устранить все потери на трение.",
  correct: false,
  explanation: "По теореме Карно КПД ≤ (T₁ - T₂)/T₁. 100% возможен только если T₂ = 0 K, что недостижимо."
  },
    {
  text: "Если проводник поместить в электростатическое поле, напряжённость поля внутри проводника будет такой же, как снаружи",
  correct:false ,
  explanation: "В проводнике в электростатическом поле заряды перераспределяются так, что внутри поля нет (E = 0)."
  },
    {
  text: "Если тело плавает в жидкости, сила Архимеда всегда равна силе тяжести, действующей на тело..",
  correct:true ,
  explanation: "При плавании F_A = mg, иначе тело бы тонуло или всплывало."
  },
    {
  text: "Если в катушку индуктивности вставить железный сердечник, её индуктивность увеличится.",
  correct:true ,
  explanation: "Железо увеличивает магнитную проницаемость, поэтому индуктивность возрастает в μ раз."
  },
    {
  text: "Если увеличить расстояние между обкладками заряженного конденсатора, не отключая его от источника, напряжение на конденсаторе не изменится.",
  correct:true ,
  explanation: "При подключённом источнике напряжение постоянно (равно ЭДС источника), а ёмкость уменьшится."
  },
   {
    text: "Кинетическая энергия тела прямо пропорциональна квадрату его скорости.",
    correct: true,
    explanation:
      "Кинетическая энергия определяется формулой Eк = mv² / 2."
  },

  {
    text: "Ускорение тела всегда направлено в сторону его скорости.",
    correct: false,
    explanation:
      "Ускорение может быть направлено против скорости, например при торможении."
  },

  {
    text: "Сила измеряется в джоулях.",
    correct: false,
    explanation:
      "Сила измеряется в ньютонах, а джоуль является единицей работы и энергии."
  },

  {
    text: "Импульс тела равен произведению массы тела на его скорость.",
    correct: true,
    explanation:
      "Импульс тела рассчитывается по формуле p = mv."
  },

  {
    text: "При увеличении массы тела в два раза его плотность также увеличивается в два раза.",
    correct: false,
    explanation:
      "Плотность определяется отношением массы к объёму: ρ = m / V. Она зависит от вещества и условий, а не только от массы тела."
  },

  {
    text: "При постоянной температуре давление идеального газа обратно пропорционально его объёму.",
    correct: true,
    explanation:
      "При постоянной температуре выполняется закон Бойля — Мариотта: pV = const."
  },

  {
    text: "Средняя кинетическая энергия теплового движения молекул идеального газа зависит от температуры.",
    correct: true,
    explanation:
      "Средняя кинетическая энергия молекул идеального газа увеличивается при повышении абсолютной температуры."
  },

  {
    text: "При плавлении кристаллического тела его температура при постоянном давлении повышается.",
    correct: false,
    explanation:
      "Во время плавления кристаллического тела при постоянном давлении температура обычно остаётся постоянной."
  },

  {
    text: "Внутренняя энергия идеального одноатомного газа зависит от его температуры.",
    correct: true,
    explanation:
      "Внутренняя энергия идеального одноатомного газа определяется средней кинетической энергией его молекул и зависит от температуры."
  },

  {
    text: "Сила тока в металлическом проводнике создаётся направленным движением электронов.",
    correct: true,
    explanation:
      "Носителями электрического заряда в металлах являются свободные электроны."
  },

  {
    text: "При последовательном соединении проводников напряжение на каждом проводнике одинаково.",
    correct: false,
    explanation:
      "При последовательном соединении одинаковой является сила тока, а напряжение распределяется между проводниками."
  },

  {
    text: "При параллельном соединении проводников напряжение на всех ветвях одинаково.",
    correct: true,
    explanation:
      "Все ветви параллельной цепи подключены к одним и тем же двум точкам, поэтому напряжение одинаково."
  },

  {
    text: "Сопротивление проводника не зависит от его длины.",
    correct: false,
    explanation:
      "Сопротивление проводника определяется формулой R = ρl / S и прямо пропорционально его длине."
  },

  {
    text: "Вокруг проводника с током существует магнитное поле.",
    correct: true,
    explanation:
      "Движение электрических зарядов создаёт магнитное поле."
  },

  {
    text: "Свет не может распространяться в вакууме.",
    correct: false,
    explanation:
      "Свет является электромагнитной волной и может распространяться в вакууме."
  },

  {
    text: "Угол отражения света равен углу падения.",
    correct: true,
    explanation:
      "Это формулировка закона отражения света."
  },

  {
    text: "При переходе света из одной среды в другую его частота изменяется.",
    correct: false,
    explanation:
      "При переходе света меняются скорость и длина волны, а частота остаётся неизменной."
  },

  {
    text: "Рассеивающая линза имеет отрицательную оптическую силу.",
    correct: true,
    explanation:
      "Оптическая сила рассеивающей линзы отрицательна."
  },

  {
    text: "Заряд ядра атома определяется числом нейтронов.",
    correct: false,
    explanation:
      "Заряд ядра определяется числом протонов, то есть зарядовым числом."
  },

  {
    text: "При радиоактивном распаде сохраняется электрический заряд.",
    correct: true,
    explanation:
      "Электрический заряд сохраняется во всех физических процессах, включая радиоактивные превращения."
  },

  {
    text: "Фотоэффект невозможен, если частота падающего света меньше красной границы.",
    correct: true,
    explanation:
      "Фотоэффект наблюдается только при частоте света не ниже определённой минимальной частоты."
  },
];



/* =========================================
   ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ HTML
   ========================================= */

const statementsElement =
  document.getElementById("theoryStatements");

const theoryInput =
  document.getElementById("theoryAnswer");

const theoryResult =
  document.getElementById("theoryResult");

const answerTheoryButton =
  document.getElementById("answerTheoryButton");

const newTheoryButton =
  document.getElementById("newTheoryButton");

const theoryTaskNumber =
  document.getElementById("theoryTaskNumber");


/* =========================================
   СОСТОЯНИЕ ТРЕНАЖЁРА
   ========================================= */

let currentTheorySet = [];
let theoryAnswered = false;
let completedTasks = 0;


/* =========================================
   ПЕРЕМЕШИВАНИЕ МАССИВА
   ========================================= */

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [
      shuffled[i],
      shuffled[randomIndex]
    ] = [
      shuffled[randomIndex],
      shuffled[i]
    ];
  }

  return shuffled;
}


/* =========================================
   СОЗДАНИЕ ОДНОГО ЗАДАНИЯ
   ========================================= */

function createTheoryTask() {
  /*
    Случайно выбираем:
    2 или 3 правильных утверждения
  */

  const correctCount =
    Math.random() < 0.5 ? 2 : 3;

  const correctStatements =
    shuffleArray(
      theoryBank.filter(statement => statement.correct)
    ).slice(0, correctCount);

  const incorrectStatements =
    shuffleArray(
      theoryBank.filter(statement => !statement.correct)
    ).slice(0, 5 - correctCount);

  /*
    Объединение правильных и неправильных
    утверждений
  */

  currentTheorySet = shuffleArray([
    ...correctStatements,
    ...incorrectStatements
  ]);

  theoryAnswered = false;
}


/* =========================================
   ОТОБРАЖЕНИЕ ПЯТИ УТВЕРЖДЕНИЙ
   ========================================= */

function renderTheoryTask() {
  createTheoryTask();



  



  statementsElement.innerHTML = "";
  theoryInput.value = "";

  theoryResult.innerHTML = "";
  theoryResult.className = "theory-result";

  completedTasks++;

  theoryTaskNumber.textContent =
    `Вопрос ${completedTasks}`;

  currentTheorySet.forEach((statement, index) => {
    const statementElement =
      document.createElement("div");

    statementElement.className =
      "theory-statement";

    statementElement.innerHTML = `
      <span class="statement-number">
        ${index + 1}
      </span>

      <span>
        ${statement.text}
      </span>
    `;

    statementsElement.appendChild(statementElement);
  });
}


/* =========================================
   ПОЛУЧЕНИЕ ПРАВИЛЬНЫХ НОМЕРОВ
   ========================================= */

function getCorrectNumbers() {
  return currentTheorySet
    .map((statement, index) => {
      return statement.correct
        ? index + 1
        : null;
    })
    .filter(number => number !== null);
}


/* =========================================
   ПОДГОТОВКА ОТВЕТА 
   ========================================= */

function normalizeAnswer(value) {
  return [
    ...new Set(
      value
        .replace(/D/g, "")
        .split("")
        .map(Number)
    )
  ].sort((a, b) => a - b);
}


/* =========================================
   СРАВНЕНИЕ ДВУХ МАССИВОВ
   ========================================= */

function arraysAreEqual(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  return firstArray.every(
    (value, index) => value === secondArray[index]
  );
}


/* =========================================
   ПОДСВЕТКА УТВЕРЖДЕНИЙ
   ========================================= */

function highlightStatements(userAnswer) {
  const statementElements =
    document.querySelectorAll(".theory-statement");

  currentTheorySet.forEach((statement, index) => {
    const statementNumber = index + 1;

    if (statement.correct) {
      statementElements[index]
        .classList
        .add("correct");
    }

    if (
      !statement.correct &&
      userAnswer.includes(statementNumber)
    ) {
      statementElements[index]
        .classList
        .add("incorrect");
    }
  });
}


/* =========================================
   ФОРМИРОВАНИЕ ОБЪЯСНЕНИЙ
   ТОЛЬКО ДЛЯ НЕВЕРНЫХ УТВЕРЖДЕНИЙ
   ========================================= */

function createIncorrectExplanations() {
  const incorrectStatements =
    currentTheorySet.filter(
      statement => !statement.correct
    );

  if (incorrectStatements.length === 0) {
    return "";
  }

  return `
    <h4>Объяснения неправильных утверждений:</h4>

    ${incorrectStatements.map(statement => `
      <div class="explanation">
        <span>Неверно:</span>
        ${statement.text}

        <br>

        ${statement.explanation}
      </div>
    `).join("")}
  `;
}









/* =========================================
   ПРОВЕРКА ОТВЕТА
   ========================================= */

function answerTheoryTask() {
  if (theoryAnswered) {
    return;
  }

  const userAnswer =
    normalizeAnswer(theoryInput.value);

  const correctAnswer =
    getCorrectNumbers();

  if (userAnswer.length === 0) {
    theoryResult.innerHTML =
      "Введите номера верных утверждений.";

    theoryResult.className =
      "theory-result error";

    return;
  }

  const isCorrect =
    arraysAreEqual(
      userAnswer,
      correctAnswer
    );

  highlightStatements(userAnswer);

  theoryResult.innerHTML = `
    <p>
      <strong>
        ${isCorrect
          ? "Правильно!"
          : "Ответ неверный."
        }
      </strong>
    </p>

    <p>
      Правильный ответ:
      <strong>${correctAnswer.join("")}</strong>
    </p>

    ${createIncorrectExplanations()}
  `;

  theoryResult.className =
    isCorrect
      ? "theory-result success"
      : "theory-result error";

  theoryAnswered = true;
}


/* =========================================
   СОБЫТИЯ
   ========================================= */

answerTheoryButton.addEventListener(
  "click",
  answerTheoryTask
);

newTheoryButton.addEventListener(
  "click",
  renderTheoryTask
);

theoryInput.addEventListener(
  "keydown",
  event => {
    if (event.key === "Enter") {
      answerTheoryTask();
    }
  }
);


/* =========================================
   ЗАПУСК ПЕРВОГО ЗАДАНИЯ
   ========================================= */

renderTheoryTask();




/* =========================================
   БАНК ФИЗИЧЕСКИХ ВЕЛИЧИН
   ========================================= */

const formulaBank = [
  {
    quantity: "Скорость при равноускоренном движении",

    correctFormula: "v = v0 + at",
    correctUnit: "м/с",

    formulas: [
      "v = s / t",
      "v = v0 + at",
      "v = t + v0",
      "v = a · t"
    ],

    units: [
      "м/с",
      "м",
      "с",
      "Н"
    ]
  },





  {
    quantity: "Путь при равноускоренном движении",
    correctFormula: "s = 2(v+v0)/t",
    correctUnit: "м",
    formulas: [
      "s = v · t",
      "s = v-v0/2a",
      "s = 2(v+v0)/t",
      "s = 2at"
    ],
    units: ["м", "м/с", "с", "м²"]
  },
  {
    quantity: "Время при равномерном движении",
    correctFormula: "t = s / v",
    correctUnit: "с",
    formulas: [
      "t = s / v",
      "t = s · v",
      "t = v / s",
      "t = s + v"
    ],
    units: ["с", "м", "м/с", "м²"]
  },
  
  {
    quantity: "Плотность",
    correctFormula: "ρ = m / V",
    correctUnit: "кг/м³",
    formulas: [
      "ρ = m / V",
      "ρ = m · V",
      "ρ = V / m",
      "ρ = F / S"
    ],
    units: ["кг/м³", "кг", "м³", "Па"]
  },
  {
    quantity: "Масса",
    correctFormula: "m = ρ · V",
    correctUnit: "кг",
    formulas: [
      "m = ρ · V",
      "m = ρ / V",
      "m = V / ρ",
      "m = ρ + V"
    ],
    units: ["кг", "кг/м³", "м³", "Н"]
  },
  {
    quantity: "Объём",
    correctFormula: "V = m / ρ",
    correctUnit: "м³",
    formulas: [
      "V = m / ρ",
      "V = m · ρ",
      "V = ρ / m",
      "V = m + ρ"
    ],
    units: ["м³", "кг", "кг/м³", "м²"]
  },
  {
    quantity: "Равнодействующая",
    correctFormula: "F = m · a",
    correctUnit: "Н",
    formulas: [
      "F = m · a",
      "F = m / a",
      "F = a / m",
      "F = p / S"
    ],
    units: ["Н", "Дж", "Вт", "кг/м³"]
  },
  {
    quantity: "Ускорение",
    correctFormula: "a = F / m",
    correctUnit: "м/с²",
    formulas: [
      "a = F / m",
      "a = F · m",
      "a = m / F",
      "a = v / t"
    ],
    units: ["м/с²", "Н", "кг", "м/с"]
  },
  {
    quantity: "Масса",
    correctFormula: "m = F / a",
    correctUnit: "кг",
    formulas: [
      "m = F / a",
      "m = F · a",
      "m = a / F",
      "m = F + a"
    ],
    units: ["кг", "Н", "м/с²", "м"]
  },
  {
    quantity: "Давление",
    correctFormula: "p = F / S",
    correctUnit: "Па",
    formulas: [
      "p = F / S",
      "p = F · S",
      "p = S / F",
      "p = ρ · V"
    ],
    units: ["Па", "Н", "Дж", "кг"]
  },
  {
    quantity: "Сила давления",
    correctFormula: "F = p · S",
    correctUnit: "Н",
    formulas: [
      "F = p · S",
      "F = p / S",
      "F = S / p",
      "F = p + S"
    ],
    units: ["Н", "Па", "м²", "Дж"]
  },
  {
    quantity: "Площадь поверхности",
    correctFormula: "S = F / p",
    correctUnit: "м²",
    formulas: [
      "S = F / p",
      "S = F · p",
      "S = p / F",
      "S = F + p"
    ],
    units: ["м²", "Н", "Па", "м"]
  },
  {
    quantity: "Работа",
    correctFormula: "A = F · scosa",
    correctUnit: "Дж",
    formulas: [
      "A = F · scosa",
      "A = F / scosa",
      "A = s / F",
      "A = m · v"
    ],
    units: ["Дж", "Н", "Вт", "м/с"]
  },
  {
    quantity: "Сила",
    correctFormula: "F = A / scosa",
    correctUnit: "Н",
    formulas: [
      "F = A / scosa",
      "F = A · scosa",
      "F = s / A",
      "F = A + s"
    ],
    units: ["Н", "Дж", "м", "Вт"]
  },
  {
    quantity: "Перемещение",
    correctFormula: "s = A / Fcosa",
    correctUnit: "м",
    formulas: [
      "s = A / Fcosa",
      "s = A · Fcosa",
      "s = F / A",
      "s = A + Fcosa"
    ],
    units: ["м", "Дж", "Н", "м²"]
  },
  {
    quantity: "Мощность",
    correctFormula: "P = A / t",
    correctUnit: "Вт",
    formulas: [
      "P = A / t",
      "P = A · t",
      "P = t / A",
      "P = F / s"
    ],
    units: ["Вт", "Дж", "Н", "Па"]
  },
  {
    quantity: "Работа",
    correctFormula: "A = P · t",
    correctUnit: "Дж",
    formulas: [
      "A = P · t",
      "A = P / t",
      "A = t / P",
      "A = P + t"
    ],
    units: ["Дж", "Вт", "с", "Н"]
  },
  {
    quantity: "Время",
    correctFormula: "t = A / P",
    correctUnit: "с",
    formulas: [
      "t = A / P",
      "t = A · P",
      "t = P / A",
      "t = A + P"
    ],
    units: ["с", "Дж", "Вт", "м"]
  },
  {
    quantity: "Кинетическая энергия",
    correctFormula: "Eₖ = m · v² / 2",
    correctUnit: "Дж",
    formulas: [
      "Eₖ = m · v² / 2",
      "Eₖ = m · v",
      "Eₖ = m · g · h",
      "Eₖ = F · s"
    ],
    units: ["Дж", "Вт", "Н", "кг·м/с"]
  },
  {
    quantity: "Масса",
    correctFormula: "m = 2Eₖ / v²",
    correctUnit: "кг",
    formulas: [
      "m = 2Eₖ / v²",
      "m = Eₖ / v²",
      "m = v² / (2Eₖ)",
      "m = 2Eₖ · v²"
    ],
    units: ["кг", "Дж", "м/с", "Н"]
  },
  {
    quantity: "Скорость",
    correctFormula: "v = √(2Eₖ / m)",
    correctUnit: "м/с",
    formulas: [
      "v = √(2Eₖ / m)",
      "v = 2Eₖ / m",
      "v = √(Eₖ / m)",
      "v = Eₖ / m"
    ],
    units: ["м/с", "Дж", "кг", "м"]
  },
  {
    quantity: "Потенциальная энергия тела",
    correctFormula: "Eₚ = m · g · h",
    correctUnit: "Дж",
    formulas: [
      "Eₚ = m · g · h",
      "Eₚ = m · v² / 2",
      "Eₚ = F / s",
      "Eₚ = m · h / g"
    ],
    units: ["Дж", "Н", "Вт", "м/с"]
  },
  {
    quantity: "Масса",
    correctFormula: "m = Eₚ / (g · h)",
    correctUnit: "кг",
    formulas: [
      "m = Eₚ / (g · h)",
      "m = Eₚ · g · h",
      "m = g · h / Eₚ",
      "m = Eₚ + g + h"
    ],
    units: ["кг", "Дж", "м/с²", "м"]
  },
  {
    quantity: "Высота",
    correctFormula: "h = Eₚ / (m · g)",
    correctUnit: "м",
    formulas: [
      "h = Eₚ / (m · g)",
      "h = Eₚ · m · g",
      "h = m · g / Eₚ",
      "h = Eₚ + m + g"
    ],
    units: ["м", "Дж", "кг", "м/с²"]
  },
  {
    quantity: "Сила тока",
    correctFormula: "I = q / t",
    correctUnit: "А",
    formulas: [
      "I = q / t",
      "I = q · t",
      "I = U · R",
      "I = R / U"
    ],
    units: ["А", "В", "Ом", "Кл"]
  },
  {
    quantity: "Электрический заряд",
    correctFormula: "q = I · t",
    correctUnit: "Кл",
    formulas: [
      "q = I · t",
      "q = I / t",
      "q = t / I",
      "q = I + t"
    ],
    units: ["Кл", "А", "с", "В"]
  },
  {
    quantity: "Время",
    correctFormula: "t = q / I",
    correctUnit: "с",
    formulas: [
      "t = q / I",
      "t = q · I",
      "t = I / q",
      "t = q + I"
    ],
    units: ["с", "Кл", "А", "м"]
  },
  {
    quantity: "Напряжение",
    correctFormula: "U = A / q",
    correctUnit: "В",
    formulas: [
      "U = A / q",
      "U = A · q",
      "U = I / R",
      "U = R / I"
    ],
    units: ["В", "А", "Ом", "Дж"]
  },
  {
    quantity: "Работа тока",
    correctFormula: "A = q · U",
    correctUnit: "Дж",
    formulas: [
      "A = q · U",
      "A = q / U",
      "A = U / q",
      "A = q + U"
    ],
    units: ["Дж", "Кл", "В", "Вт"]
  },
  {
    quantity: "Сопротивление",
    correctFormula: "R = U / I",
    correctUnit: "Ом",
    formulas: [
      "R = U / I",
      "R = U · I",
      "R = I / U",
      "R = ρ · S / l"
    ],
    units: ["Ом", "В", "А", "Вт"]
  },
  {
    quantity: "Закон Ома для участка цепи",
    correctFormula: "I = U / R",
    correctUnit: "А",
    formulas: [
      "I = U / R",
      "I = U · R",
      "I = R / U",
      "I = U + R"
    ],
    units: ["А", "В", "Ом", "Кл"]
  },
  {
    quantity: "Напряжение",
    correctFormula: "U = I · R",
    correctUnit: "В",
    formulas: [
      "U = I · R",
      "U = I / R",
      "U = R / I",
      "U = I + R"
    ],
    units: ["В", "А", "Ом", "Дж"]
  },
  {
    quantity: "Сопротивление",
    correctFormula: "R = ρ · L / S",
    correctUnit: "Ом",
    formulas: [
      "R = ρ · L / S",
      "R = ρ · S / L",
      "R = L / (ρ · S)",
      "R = ρ + L + S"
    ],
    units: ["Ом", "Ом·м", "м", "м²"]
  },
  {
    quantity: "Удельное сопротивление",
    correctFormula: "ρ = R · S / L",
    correctUnit: "Ом·м",
    formulas: [
      "ρ = R · S / L",
      "ρ = R / (S · L)",
      "ρ = L / (R · S)",
      "ρ = R + S + L"
    ],
    units: ["Ом·м", "Ом", "м²", "м"]
  },
  {
    quantity: "Длина проводника",
    correctFormula: "L = R · S / ρ",
    correctUnit: "м",
    formulas: [
      "L = R · S / ρ",
      "L = R / (S · ρ)",
      "L = ρ / (R · S)",
      "L = R + S + ρ"
    ],
    units: ["м", "Ом", "м²", "Ом·м"]
  },
  {
    quantity: "Площадь поперечного сечения",
    correctFormula: "S = ρ · L / R",
    correctUnit: "м²",
    formulas: [
      "S = ρ · L / R",
      "S = ρ / (L · R)",
      "S = R / (ρ · L)",
      "S = ρ + L + R"
    ],
    units: ["м²", "Ом·м", "м", "Ом"]
  },
  {
    quantity: "Количество теплоты при нагревании",
    correctFormula: "Q = c · m · Δt",
    correctUnit: "Дж",
    formulas: [
      "Q = c · m · Δt",
      "Q = c · m / Δt",
      "Q = λ · m",
      "Q = q / m"
    ],
    units: ["Дж", "Вт", "Кл", "Па"]
  },
  {
    quantity: "Удельная теплоёмкость",
    correctFormula: "c = Q / (m · Δt)",
    correctUnit: "Дж/(кг·К)",
    formulas: [
      "c = Q / (m · Δt)",
      "c = Q · m · Δt",
      "c = m · Δt / Q",
      "c = Q + m + Δt"
    ],
    units: ["Дж/(кг·К)", "Дж", "кг", "К"]
  },
  {
    quantity: "Масса",
    correctFormula: "m = Q / (c · Δt)",
    correctUnit: "кг",
    formulas: [
      "m = Q / (c · Δt)",
      "m = Q · c · Δt",
      "m = c · Δt / Q",
      "m = Q + c + Δt"
    ],
    units: ["кг", "Дж", "Дж/(кг·К)", "К"]
  },
  {
    quantity: "Изменение температуры",
    correctFormula: "Δt = Q / (c · m)",
    correctUnit: "К",
    formulas: [
      "Δt = Q / (c · m)",
      "Δt = Q · c · m",
      "Δt = c · m / Q",
      "Δt = Q + c + m"
    ],
    units: ["К", "Дж", "Дж/(кг·К)", "кг"]
  },
  {
    quantity: "Количество теплоты при плавлении",
    correctFormula: "Q = λ · m",
    correctUnit: "Дж",
    formulas: [
      "Q = λ · m",
      "Q = λ / m",
      "Q = m / λ",
      "Q = λ + m"
    ],
    units: ["Дж", "Дж/кг", "кг", "Вт"]
  },
  {
    quantity: "Удельная теплота плавления",
    correctFormula: "λ = Q / m",
    correctUnit: "Дж/кг",
    formulas: [
      "λ = Q / m",
      "λ = Q · m",
      "λ = m / Q",
      "λ = Q + m"
    ],
    units: ["Дж/кг", "Дж", "кг", "Дж/(кг·К)"]
  },
  
  {
    quantity: "Удельная теплота сгорания",
    correctFormula: "q = Q / m",
    correctUnit: "Дж/кг",
    formulas: [
      "q = Q / m",
      "q = Q · m",
      "q = m / Q",
      "q = Q + m"
    ],
    units: ["Дж/кг", "Дж", "кг", "Дж/(кг·К)"]
  },
  {
    quantity: "Частота",
    correctFormula: "ν = N / t",
    correctUnit: "Гц",
    formulas: [
      "ν = N / t",
      "ν = N · t",
      "ν = t / N",
      "ν = 1 / T"
    ],
    units: ["Гц", "с", "м/с", "Н"]
  },
  {
    quantity: "Период колебаний",
    correctFormula: "T = t / N",
    correctUnit: "с",
    formulas: [
      "T = t / N",
      "T = t · N",
      "T = N / t",
      "T = 1 / ν"
    ],
    units: ["с", "Гц", "1/с", "мин"]
  },
  {
    quantity: "Связь частоты и периода",
    correctFormula: "ν = 1 / T",
    correctUnit: "Гц",
    formulas: [
      "ν = 1 / T",
      "ν = T",
      "ν = T²",
      "ν = 1 / T²"
    ],
    units: ["Гц", "с", "1/с", "об/мин"]
  },
  {
    quantity: "Длина волны",
    correctFormula: "λ = v / ν",
    correctUnit: "м",
    formulas: [
      "λ = v / ν",
      "λ = v · ν",
      "λ = ν / v",
      "λ = v + ν"
    ],
    units: ["м", "м/с", "Гц", "с"]
  },
  {
    quantity: "Скорость волны",
    correctFormula: "v = λ · ν",
    correctUnit: "м/с",
    formulas: [
      "v = λ · ν",
      "v = λ / ν",
      "v = ν / λ",
      "v = λ + ν"
    ],
    units: ["м/с", "м", "Гц", "с"]
  },
  {
    quantity: "Период математического маятника",
    correctFormula: "T = 2π√(l / g)",
    correctUnit: "с",
    formulas: [
      "T = 2π√(l / g)",
      "T = 2π√(g / l)",
      "T = 2π · l / g",
      "T = 2π · g / l"
    ],
    units: ["с", "м", "м/с²", "Гц"]
  },
  {
    quantity: "Длина математического маятника",
    correctFormula: "l = g · T² / (4π²)",
    correctUnit: "м",
    formulas: [
      "l = g · T² / (4π²)",
      "l = g / (T² · 4π²)",
      "l = T² / (g · 4π²)",
      "l = g · T² · 4π²"
    ],
    units: ["м", "м/с²", "с", "Гц"]
  },
  
  {
    quantity: "Период пружинного маятника",
    correctFormula: "T = 2π√(m / k)",
    correctUnit: "с",
    formulas: [
      "T = 2π√(m / k)",
      "T = 2π√(k / m)",
      "T = 2π · m / k",
      "T = 2π · k / m"
    ],
    units: ["с", "кг", "Н/м", "Гц"]
  },
  {
    quantity: "Масса груза пружинного маятника",
    correctFormula: "m = k · T² / (4π²)",
    correctUnit: "кг",
    formulas: [
      "m = k · T² / (4π²)",
      "m = k / (T² · 4π²)",
      "m = T² / (k · 4π²)",
      "m = k · T² · 4π²"
    ],
    units: ["кг", "Н/м", "с", "Гц"]
  },
  {
    quantity: "Жёсткость пружины",
    correctFormula: "k = 4π² · m / T²",
    correctUnit: "Н/м",
    formulas: [
      "k = 4π² · m / T²",
      "k = 4π² / (m · T²)",
      "k = T² / (4π² · m)",
      "k = 4π² · m · T²"
    ],
    units: ["Н/м", "кг", "с", "Гц"]
  },
  {
    quantity: "Сила тяжести",
    correctFormula: "F = m · g",
    correctUnit: "Н",
    formulas: [
      "F = m · g",
      "F = m / g",
      "F = g / m",
      "F = m + g"
    ],
    units: ["Н", "кг", "м/с²", "Дж"]
  },
  {
    quantity: "Масса",
    correctFormula: "m = F / g",
    correctUnit: "кг",
    formulas: [
      "m = F / g",
      "m = F · g",
      "m = g / F",
      "m = F + g"
    ],
    units: ["кг", "Н", "м/с²", "м"]
  },
  
  {
    quantity: "Вес тела по модулю",
    correctFormula: "P = N",
    correctUnit: "Н",
    formulas: [
      "P = m · g",
      "P = m / g",
      "P = g / m",
      "P = N"
    ],
    units: ["Н", "кг", "м/с²", "Па"]
  },
  {
    quantity: "Сила упругости",
    correctFormula: "F = k · Δx",
    correctUnit: "Н",
    formulas: [
      "F = k · Δx",
      "F = k / Δx",
      "F = Δx / k",
      "F = k + Δx"
    ],
    units: ["Н", "Н/м", "м", "Дж"]
  },
  {
    quantity: "Жёсткость пружины",
    correctFormula: "k = F / Δx",
    correctUnit: "Н/м",
    formulas: [
      "k = F / Δx",
      "k = F · Δx",
      "k = Δx / F",
      "k = F + Δx"
    ],
    units: ["Н/м", "Н", "м", "кг"]
  },
  {
    quantity: "Удлинение пружины",
    correctFormula: "Δx = F / k",
    correctUnit: "м",
    formulas: [
      "Δx = F / k",
      "Δx = F · k",
      "Δx = k / F",
      "Δx = F + k"
    ],
    units: ["м", "Н", "Н/м", "мм"]
  },
  {
    quantity: "Сила трения скольжения",
    correctFormula: "F = μ · N",
    correctUnit: "Н",
    formulas: [
      "F = μ · N",
      "F = μ / N",
      "F = N / μ",
      "F = μ + N"
    ],
    units: ["Н", "", "Н", "кг"]
  },
  {
    quantity: "Коэффициент трения",
    correctFormula: "μ = F / N",
    correctUnit: "",
    formulas: [
      "μ = F / N",
      "μ = F · N",
      "μ = N / F",
      "μ = F + N"
    ],
    units: ["", "Н", "Н", "кг"]
  },
  {
    quantity: "Сила Архимеда",
    correctFormula: "F = ρ · g · V",
    correctUnit: "Н",
    formulas: [
      "F = ρ · g · V",
      "F = ρ / (g · V)",
      "F = g / (ρ · V)",
      "F = ρ · g / V"
    ],
    units: ["Н", "кг/м³", "м/с²", "м³"]
  },
  {
    quantity: "Объём вытесненной жидкости",
    correctFormula: "V = F / (ρ · g)",
    correctUnit: "м³",
    formulas: [
      "V = F / (ρ · g)",
      "V = F · ρ · g",
      "V = ρ · g / F",
      "V = F + ρ + g"
    ],
    units: ["м³", "Н", "кг/м³", "м/с²"]
  },
  {
    quantity: "Плотность жидкости",
    correctFormula: "ρ = F / (g · V)",
    correctUnit: "кг/м³",
    formulas: [
      "ρ = F / (g · V)",
      "ρ = F · g · V",
      "ρ = g · V / F",
      "ρ = F + g + V"
    ],
    units: ["кг/м³", "Н", "м/с²", "м³"]
  },
  {
    quantity: "Момент силы",
    correctFormula: "M = F · l",
    correctUnit: "Н·м",
    formulas: [
      "M = F · l",
      "M = F / l",
      "M = l / F",
      "M = F + l"
    ],
    units: ["Н·м", "Н", "м", "Дж"]
  },
  {
    quantity: "Плечо силы",
    correctFormula: "l = M / F",
    correctUnit: "м",
    formulas: [
      "l = M / F",
      "l = M · F",
      "l = F / M",
      "l = M + F"
    ],
    units: ["м", "Н·м", "Н", "м²"]
  },
  {
    quantity: "Сила",
    correctFormula: "F = M / l",
    correctUnit: "Н",
    formulas: [
      "F = M / l",
      "F = M · l",
      "F = l / M",
      "F = M + l"
    ],
    units: ["Н", "Н·м", "м", "Дж"]
  },
  {
    quantity: "Условие равновесия рычага",
    correctFormula: "F₁ · l₁ = F₂ · l₂",
    correctUnit: "Н·м",
    formulas: [
      "F₁ · l₁ = F₂ · l₂",
      "F₁ / l₁ = F₂ / l₂",
      "F₁ · l₂ = F₂ · l₁",
      "F₁ + l₁ = F₂ + l₂"
    ],
    units: ["Н·м", "Н", "м", "Дж"]
  },
  {
    quantity: "Импульс тела",
    correctFormula: "p = m · v",
    correctUnit: "кг·м/с",
    formulas: [
      "p = m · v",
      "p = m / v",
      "p = v / m",
      "p = m + v"
    ],
    units: ["кг·м/с", "кг", "м/с", "Н"]
  },
  {
    quantity: "Масса",
    correctFormula: "m = p / v",
    correctUnit: "кг",
    formulas: [
      "m = p / v",
      "m = p · v",
      "m = v / p",
      "m = p + v"
    ],
    units: ["кг", "кг·м/с", "м/с", "Н"]
  },
  {
    quantity: "Скорость",
    correctFormula: "v = p / m",
    correctUnit: "м/с",
    formulas: [
      "v = p / m",
      "v = p · m",
      "v = m / p",
      "v = p + m"
    ],
    units: ["м/с", "кг·м/с", "кг", "м"]
  },
  {
    quantity: "Изменение импульса",
    correctFormula: "Δp = F · Δt",
    correctUnit: "кг·м/с",
    formulas: [
      "Δp = F · Δt",
      "Δp = F / Δt",
      "Δp = Δt / F",
      "Δp = F + Δt"
    ],
    units: ["кг·м/с", "Н", "с", "кг"]
  },
  {
    quantity: "Сила",
    correctFormula: "F = Δp / Δt",
    correctUnit: "Н",
    formulas: [
      "F = Δp / Δt",
      "F = Δp · Δt",
      "F = Δt / Δp",
      "F = Δp + Δt"
    ],
    units: ["Н", "кг·м/с", "с", "кг"]
  },
  {
    quantity: "Время",
    correctFormula: "Δt = Δp / F",
    correctUnit: "с",
    formulas: [
      "Δt = Δp / F",
      "Δt = Δp · F",
      "Δt = F / Δp",
      "Δt = Δp + F"
    ],
    units: ["с", "кг·м/с", "Н", "мс"]
  },
  {
    quantity: "Потенциальная энергия пружины",
    correctFormula: "E = k · Δx² / 2",
    correctUnit: "Дж",
    formulas: [
      "E = k · Δx² / 2",
      "E = k · Δx / 2",
      "E = k / (2 · Δx)",
      "E = 2 · k · Δx"
    ],
    units: ["Дж", "Н/м", "м", "Н"]
  },
  {
    quantity: "Жёсткость",
    correctFormula: "k = 2E / Δx²",
    correctUnit: "Н/м",
    formulas: [
      "k = 2E / Δx²",
      "k = E / Δx²",
      "k = Δx² / (2E)",
      "k = 2E · Δx²"
    ],
    units: ["Н/м", "Дж", "м", "Н"]
  },
  {quantity: "Удлинение",
    correctFormula: "Δx = √(2E / k)",
    correctUnit: "м",
    formulas: [
      "Δx = √(2E / k)",
      "Δx = 2E / k",
      "Δx = √(E / k)",
      "Δx = E / k"
    ],
    units: ["м", "Дж", "Н/м", "мм"]
  },
  {
    quantity: "Центростремительное ускорение",
    correctFormula: "a = v² / R",
    correctUnit: "м/с²",
    formulas: [
      "a = v² / R",
      "a = v / R",
      "a = R / v²",
      "a = v² · R"
    ],
    units: ["м/с²", "м/с", "м", "м²/с²"]
  },
  {
    quantity: "Скорость",
    correctFormula: "v = √(a · R)",
    correctUnit: "м/с",
    formulas: [
      "v = √(a · R)",
      "v = a · R",
      "v = a / R",
      "v = R / a"
    ],
    units: ["м/с", "м/с²", "м", "м²/с"]
  },
  {
    quantity: "Радиус",
    correctFormula: "R = v² / a",
    correctUnit: "м",
    formulas: [
      "R = v² / a",
      "R = v² · a",
      "R = a / v²",
      "R = v² + a"
    ],
    units: ["м", "м/с", "м/с²", "м²"]
  },
  {
    quantity: "Период обращения",
    correctFormula: "T = 2πR / v",
    correctUnit: "с",
    formulas: [
      "T = 2πR / v",
      "T = 2πv / R",
      "T = v / (2πR)",
      "T = 2πR · v"
    ],
    units: ["с", "м", "м/с", "Гц"]
  },
  {
    quantity: "Радиус",
    correctFormula: "R = v · T / (2π)",
    correctUnit: "м",
    formulas: [
      "R = v · T / (2π)",
      "R = v / (T · 2π)",
      "R = T / (v · 2π)",
      "R = v · T · 2π"
    ],
    units: ["м", "м/с", "с", "Гц"]
  },
  {
    quantity: "Скорость",
    correctFormula: "v = 2πR / T",
    correctUnit: "м/с",
    formulas: [
      "v = 2πR / T",
      "v = 2πT / R",
      "v = R / (2πT)",
      "v = 2πR · T"
    ],
    units: ["м/с", "м", "с", "Гц"]
  },
  {
    quantity: "Частота обращения",
    correctFormula: "ν = 1 / T",
    correctUnit: "Гц",
    formulas: [
      "ν = 1 / T",
      "ν = T",
      "ν = T²",
      "ν = 1 / T²"
    ],
    units: ["Гц", "с", "1/с", "об/мин"]
  },
  {
    quantity: "Угловая скорость",
    correctFormula: "ω = 2π / T",
    correctUnit: "рад/с",
    formulas: [
      "ω = 2π / T",
      "ω = 2π · T",
      "ω = T / (2π)",
      "ω = 2π + T"
    ],
    units: ["рад/с", "с", "Гц", "рад"]
  },
  {
    quantity: "Период",
    correctFormula: "T = 2π / ω",
    correctUnit: "с",
    formulas: [
      "T = 2π / ω",
      "T = 2π · ω",
      "T = ω / (2π)",
      "T = 2π + ω"
    ],
    units: ["с", "рад/с", "Гц", "рад"]
  },
  {
    quantity: "Связь линейной и угловой скорости",
    correctFormula: "v = ω · R",
    correctUnit: "м/с",
    formulas: [
      "v = ω · R",
      "v = ω / R",
      "v = R / ω",
      "v = ω + R"
    ],
    units: ["м/с", "рад/с", "м", "м²/с"]
  },
  {
    quantity: "Угловая скорость через линейную",
    correctFormula: "ω = v / R",
    correctUnit: "рад/с",
    formulas: [
      "ω = v / R",
      "ω = v · R",
      "ω = R / v",
      "ω = v + R"
    ],
    units: ["рад/с", "м/с", "м", "м²/с"]
  },
  {
    quantity: "Радиус",
    correctFormula: "R = v / ω",
    correctUnit: "м",
    formulas: [
      "R = v / ω",
      "R = v · ω",
      "R = ω / v",
      "R = v + ω"
    ],
    units: ["м", "м/с", "рад/с", "м²"]
  },
  {
    quantity: "Закон всемирного тяготения",
    correctFormula: "F = G · m₁m₂ / R²",
    correctUnit: "Н",
    formulas: [
      "F = G · m₁m₂ / R²",
      "F = G · m₁m₂ · R²",
      "F = G · R² / (m₁m₂)",
      "F = m₁m₂ / (G · R²)"
    ],
    units: ["Н", "кг", "м", "Н·м²/кг²"]
  },
  {
    quantity: "Расстояние",
    correctFormula: "R = √(G · m₁m₂ / F)",
    correctUnit: "м",
    formulas: [
      "R = √(G · m₁m₂ / F)",
      "R = G · m₁m₂ / F",
      "R = F / (G · m₁m₂)",
      "R = G · m₁m₂ · F"
    ],
    units: ["м", "Н", "кг", "Н·м²/кг²"]
  },
  {
    quantity: "Масса",
    correctFormula: "m = F · R² / (G · m₂)",
    correctUnit: "кг",
    formulas: [
      "m = F · R² / (G · m₂)",
      "m = F / (G · m₂ · R²)",
      "m = G · m₂ · R² / F",
      "m = F + G + m₂ + R"
    ],
    units: ["кг", "Н", "м", "Н·м²/кг²"]
  },

{
    quantity: "Ускорение свободного падения на планете",
    correctFormula: "g = G · M / R²",
    correctUnit: "м/с²",
    formulas: [
      "g = G · M / R²",
      "g = G · M · R²",
      "g = R² / (G · M)",
      "g = G · R² / M"
    ],
    units: ["м/с²", "кг", "м", "Н·м²/кг²"]
  },
  {
    quantity: "Масса планеты",
    correctFormula: "M = g · R² / G",
    correctUnit: "кг",
    formulas: [
      "M = g · R² / G",
      "M = g / (R² · G)",
      "M = R² / (g · G)",
      "M = g · R² · G"
    ],
    units: ["кг", "м/с²", "м", "Н·м²/кг²"]
  },
  {
    quantity: "Радиус планеты",
    correctFormula: "R = √(G · M / g)",
    correctUnit: "м",
    formulas: [
      "R = √(G · M / g)",
      "R = G · M / g",
      "R = g / (G · M)",
      "R = G · M · g"
    ],
    units: ["м", "м/с²", "кг", "Н·м²/кг²"]
  },
  {
    quantity: "Первая космическая скорость",
    correctFormula: "v = √(G · M / R)",
    correctUnit: "м/с",
    formulas: [
      "v = √(G · M / R)",
      "v = G · M / R",
      "v = √(G · M · R)",
      "v = G · M · R"
    ],
    units: ["м/с", "кг", "м", "Н·м²/кг²"]
  },
  {
    quantity: "Масса планеты",
    correctFormula: "M = v² · R / G",
    correctUnit: "кг",
    formulas: [
      "M = v² · R / G",
      "M = v² / (R · G)",
      "M = R / (v² · G)",
      "M = v² · R · G"
    ],
    units: ["кг", "м/с", "м", "Н·м²/кг²"]
  },
  {
    quantity: "Радиус",
    correctFormula: "R = G · M / v²",
    correctUnit: "м",
    formulas: [
      "R = G · M / v²",
      "R = G · M · v²",
      "R = v² / (G · M)",
      "R = G · M + v²"
    ],
    units: ["м", "м/с", "кг", "Н·м²/кг²"]
  },
  {
    quantity: "Перемещение при равноускоренном движении",
    correctFormula: "s = v₀t + at²/2",
    correctUnit: "м",
    formulas: [
      "s = v₀t + at²/2",
      "s = v₀t - at²/2",
      "s = v₀t · at²/2",
      "s = (v₀ + a)t/2"
    ],
    units: ["м", "м/с", "с", "м/с²"]
  },
  {
    quantity: "Скорость при равноускоренном движении",
    correctFormula: "v = v₀ + at",
    correctUnit: "м/с",
    formulas: [
      "v = v₀ + at",
      "v = v₀ - at",
      "v = v₀ · at",
      "v = (v₀ + a)t"
    ],
    units: ["м/с", "м/с", "с", "м/с²"]
  },
  {
    quantity: "Ускорение при равноускоренном движении",
    correctFormula: "a = (v - v₀) / t",
    correctUnit: "м/с²",
    formulas: [
      "a = (v - v₀) / t",
      "a = (v + v₀) / t",
      "a = (v - v₀) · t",
      "a = v - v₀ - t"
    ],
    units: ["м/с²", "м/с", "с", "м"]
  },
  {
    quantity: "Время при равноускоренном движении",
    correctFormula: "t = (v - v₀) / a",
    correctUnit: "с",
    formulas: [
      "t = (v - v₀) / a",
      "t = (v + v₀) / a",
      "t = a / (v - v₀)",
      "t = (v - v₀) · a"
    ],
    units: ["с", "м/с", "м/с²", "м"]
  },
  {
    quantity: "Начальная скорость",
    correctFormula: "v₀ = v - at",
    correctUnit: "м/с",
    formulas: [
      "v₀ = v - at",
      "v₀ = v + at",
      "v₀ = v · at",
      "v₀ = v / (at)"
    ],
    units: ["м/с", "м/с", "м/с²", "с"]
  },
  {
    quantity: "Перемещение без времени",
    correctFormula: "s = (v² - v₀²) / (2a)",
    correctUnit: "м",
    formulas: [
      "s = (v² - v₀²) / (2a)",
      "s = (v² + v₀²) / (2a)",
      "s = (v - v₀)² / (2a)",
      "s = (v² - v₀²) · 2a"
    ],
    units: ["м", "м/с", "м/с²", "с"]
  },
  {
    quantity: "Ускорение без времени",
    correctFormula: "a = (v² - v₀²) / (2s)",
    correctUnit: "м/с²",
    formulas: [
      "a = (v² - v₀²) / (2s)",
      "a = (v² + v₀²) / (2s)",
      "a = 2s / (v² - v₀²)",
      "a = (v² - v₀²) · 2s"
    ],
    units: ["м/с²", "м/с", "м", "с"]
  },
  {
    quantity: "Дальность полёта тела, брошенного под углом",
    correctFormula: "s = v₀² · sin(2α) / g",
    correctUnit: "м",
    formulas: [
      "s = v₀² · sin(2α) / g",
      "s = v₀² · cos(2α) / g",
      "s = v₀ · sin(2α) / g",
      "s = v₀² · sin(α) / g"
    ],
    units: ["м", "м/с", "м/с²", "°"]
  },
  {
    quantity: "Максимальная высота подъёма",
    correctFormula: "h = v₀² · sin²α / (2g)",
    correctUnit: "м",
    formulas: [
      "h = v₀² · sin²α / (2g)",
      "h = v₀² · cos²α / (2g)",
      "h = v₀ · sin²α / (2g)",
      "h = v₀² · sinα / (2g)"
    ],
    units: ["м", "м/с", "м/с²", "°"]
  },
  {
    quantity: "Время полёта при броске под углом",
    correctFormula: "t = 2v₀ · sinα / g",
    correctUnit: "с",
    formulas: [
      "t = 2v₀ · sinα / g",
      "t = v₀ · sinα / g",
      "t = 2v₀ · cosα / g",
      "t = 2v₀ · sinα · g"
    ],
    units: ["с", "м/с", "м/с²", "°"]
  },
  {
    quantity: "Мощность",
    correctFormula: "P = F · v",
    correctUnit: "Вт",
    formulas: [
      "P = F · v",
      "P = F / v",
      "P = v / F",
      "P = F + v"
    ],
    units: ["Вт", "Н", "м/с", "Дж"]
  },
  {
    quantity: "Сила",
    correctFormula: "F = P / v",
    correctUnit: "Н",
    formulas: [
      "F = P / v",
      "F = P · v",
      "F = v / P",
      "F = P + v"
    ],
    units: ["Н", "Вт", "м/с", "Дж"]
  },
  {
    quantity: "Скорость",
    correctFormula: "v = P / F",
    correctUnit: "м/с",
    formulas: [
      "v = P / F",
      "v = P · F",
      "v = F / P",
      "v = P + F"
    ],
    units: ["м/с", "Вт", "Н", "м"]
  },
  {
    quantity: "Закон сохранения механической энергии",
    correctFormula: "Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂",
    correctUnit: "Дж",
    formulas: [
      "Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂",
      "Eₖ₁ - Eₚ₁ = Eₖ₂ - Eₚ₂",
      "Eₖ₁ · Eₚ₁ = Eₖ₂ · Eₚ₂",
      "Eₖ₁ / Eₚ₁ = Eₖ₂ / Eₚ₂"
    ],
    units: ["Дж", "Дж", "Дж", "Дж"]
  },
    
];


/* =========================================
   ПОЛУЧЕНИЕ HTML-ЭЛЕМЕНТОВ
   ========================================= */

const formulaQuantityElement =
  document.getElementById("formulaQuantity");

const formulaOptionsElement =
  document.getElementById("formulaOptions");

const unitOptionsElement =
  document.getElementById("unitOptions");

const formulaResultElement =
  document.getElementById("formulaResult");

const checkFormulaButton =
  document.getElementById("checkFormulaButton");

const newFormulaButton =
  document.getElementById("newFormulaButton");

const formulaTaskNumberElement =
  document.getElementById("formulaTaskNumber");


/* =========================================
   СОСТОЯНИЕ ТРЕНАЖЁРА
   ========================================= */

let currentFormulaTask = null;
let formulaTaskNumber = 0;
let formulaAnswered = false;


/* =========================================
   ПЕРЕМЕШИВАНИЕ МАССИВА
   ========================================= */

function shuffleFormulaArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex =
      Math.floor(Math.random() * (i + 1));

    [
      shuffled[i],
      shuffled[randomIndex]
    ] = [
      shuffled[randomIndex],
      shuffled[i]
    ];
  }

  return shuffled;
}


/* =========================================
   СОЗДАНИЕ ОДНОГО ЗАДАНИЯ
   ========================================= */

function createFormulaTask() {
  const randomIndex =
    Math.floor(Math.random() * formulaBank.length);

  const originalTask =
    formulaBank[randomIndex];

  currentFormulaTask = {
    ...originalTask,

    formulas: shuffleFormulaArray(
      originalTask.formulas
    ),

    units: shuffleFormulaArray(
      originalTask.units
    )
  };

  formulaAnswered = false;
}


/* =========================================
   СОЗДАНИЕ ОДНОГО ВАРИАНТА
   ========================================= */

function createFormulaOption(
  value,
  groupName,
  optionType
) {
  const label = document.createElement("label");

  label.className = "formula-option";

  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.name = groupName;
  checkbox.value = value;

  const text = document.createElement("span");

  text.className =
    optionType === "formula"
      ? "formula-text"
      : "unit-text";

  text.textContent = value;

  label.append(checkbox, text);

  return label;
}


/* =========================================
   ОТОБРАЖЕНИЕ ЗАДАНИЯ
   ========================================= */

function renderFormulaTask() {
  createFormulaTask();

  formulaTaskNumber++;

  formulaTaskNumberElement.textContent =
    `Вопрос ${formulaTaskNumber}`;

  formulaQuantityElement.textContent =
    currentFormulaTask.quantity;

  formulaOptionsElement.innerHTML = "";
  unitOptionsElement.innerHTML = "";

  formulaResultElement.innerHTML = "";
  formulaResultElement.className =
    "formula-result";

  currentFormulaTask.formulas.forEach(formula => {
    const option = createFormulaOption(
      formula,
      "formulaAnswer",
      "formula"
    );

    formulaOptionsElement.appendChild(option);
  });

  currentFormulaTask.units.forEach(unit => {
    const option = createFormulaOption(
      unit,
      "unitAnswer",
      "unit"
    );

    unitOptionsElement.appendChild(option);
  });

  addCheckboxLimits();
}


/* =========================================
   ОГРАНИЧЕНИЕ: ОДНА ФОРМУЛА
   И ОДНА ЕДИНИЦА
   ========================================= */

function addCheckboxLimits() {
  const formulaCheckboxes =
    document.querySelectorAll(
      'input[name="formulaAnswer"]'
    );

  const unitCheckboxes =
    document.querySelectorAll(
      'input[name="unitAnswer"]'
    );

  formulaCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        formulaCheckboxes.forEach(otherCheckbox => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });

  unitCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        unitCheckboxes.forEach(otherCheckbox => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });
}


/* =========================================
   ПОЛУЧЕНИЕ ВЫБРАННОГО ОТВЕТА
   ========================================= */

function getCheckedValue(groupName) {
  const checked =
    document.querySelector(
      `input[name="${groupName}"]:checked`
    );

  return checked ? checked.value : null;
}


/* =========================================
   ПОДСВЕТКА ОТВЕТОВ
   ========================================= */

function highlightCorrectOption(
  groupName,
  correctValue
) {
  const labels =
    document.querySelectorAll(
      `input[name="${groupName}"]`
    );

  labels.forEach(input => {
    const label = input.closest(".formula-option");

    if (input.value === correctValue) {
      label.classList.add("correct");
    } else if (input.checked) {
      label.classList.add("incorrect");
    }
  });
}


/* =========================================
   ПРОВЕРКА ОТВЕТА
   ========================================= */

function checkFormulaAnswer() {
  if (formulaAnswered) {
    return;
  }

  const selectedFormula =
    getCheckedValue("formulaAnswer");

  const selectedUnit =
    getCheckedValue("unitAnswer");

  if (!selectedFormula || !selectedUnit) {
    formulaResultElement.textContent =
      "Выберите одну формулу и одну единицу измерения.";

    formulaResultElement.className =
      "formula-result error";

    return;
  }

  const correctFormula =
    selectedFormula === currentFormulaTask.correctFormula;

  const correctUnit =
    selectedUnit === currentFormulaTask.correctUnit;

  highlightCorrectOption(
    "formulaAnswer",
    currentFormulaTask.correctFormula
  );

  highlightCorrectOption(
    "unitAnswer",
    currentFormulaTask.correctUnit
  );

  if (correctFormula && correctUnit) {
    formulaResultElement.innerHTML = `
      <strong>Правильно!</strong>
    `;

    formulaResultElement.className =
      "formula-result success";
  } else {
    formulaResultElement.innerHTML = `
      <strong>Ответ неверный.</strong>
      <p>
        Правильная формула:
        <strong>${currentFormulaTask.correctFormula}</strong>
      </p>

      <p>
        Правильная единица:
        <strong>${currentFormulaTask.correctUnit}</strong>
      </p>
    `;

    formulaResultElement.className =
      "formula-result error";
  }

  formulaAnswered = true;
}


/* =========================================
   ОБРАБОТЧИКИ КНОПОК
   ========================================= */

checkFormulaButton.addEventListener(
  "click",
  checkFormulaAnswer
);

newFormulaButton.addEventListener(
  "click",
  renderFormulaTask
);


/* =========================================
   ПЕРВОЕ ЗАДАНИЕ
   ========================================= */

renderFormulaTask();
