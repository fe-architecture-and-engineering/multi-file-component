<div class='my-dialog__wrapper'>
  <div class='my-dialog__head'>
    <button class='my-dialog__close'>&times;</button>
    <slot name="title"></slot>
  </div>
  <div class='my-dialog__body'>
    <div class='my-dialog__content'>
      <slot name="content"></slot>
    </div>
  </div>
</div>