// クラスのエクスポート
export class eClass {
  constructor() {
    this.current = new B();
  }
}

class B {}

// 関数のエクスポート
export function eFunction() {
  alert("It's Exported Function !");
}
