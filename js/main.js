const pres = document.querySelectorAll('pre');
const presClipboard = new ClipboardJS(pres);

const buttons = document.querySelectorAll('.clipboard-button');
const buttonsClipboard = new ClipboardJS(buttons);

presClipboard.on('success', function (e) {
  const parentDiv = e.trigger.parentElement;

  const text = `تم النسخ.
    شكراً على روحك الإيجابية 😉`;

  addTooltip(parentDiv, text, ['custom-tooltip']);
});

presClipboard.on('error', function (e) {
  const parentDiv = e.trigger.parentElement;
  const text = 'حدث خطأ ما، الرجاء نسخ الرسالة يدوياً.';

  addTooltip(parentDiv, text, [
    'rounded-0',
    'alert',
    'alert-danger',
    'text-dark',
    'w-75',
    'mx-auto',
  ]);

  console.log('error copying', e);
});

buttonsClipboard.on('success', function (e) {
  // Get the parent div of the `pre` element
  const parentDiv =
    e.trigger.parentElement.previousElementSibling.firstElementChild;

  const text = `تم النسخ.
    شكراً على روحك الإيجابية 😉`;

  addTooltip(parentDiv, text, ['custom-tooltip']);
});

buttonsClipboard.on('error', function (e) {
  const parentDiv =
    e.trigger.parentElement.previousElementSibling.firstElementChild;
  const text = 'حدث خطأ ما، الرجاء نسخ الرسالة يدوياً.';

  addTooltip(parentDiv, text, [
    'rounded-0',
    'alert',
    'alert-danger',
    'text-dark',
    'w-75',
    'mx-auto',
  ]);

  console.log('error copying', e);
});

function addTooltip(parentElement, text, classes = []) {
  let addTooltip = true;

  // Prevent adding multiple tooltips
  parentElement.childNodes.forEach((child) => {
    if (child.classList) {
      if (child.classList.contains('custom-tooltip')) {
        addTooltip = false;
      }
    }
  });

  if (addTooltip) {
    const done = document.createElement('div');
    done.innerText = text;
    done.classList.add(...classes);

    parentElement.append(done);

    setTimeout(() => {
      parentElement.removeChild(done);
    }, 5000);
  }
}
