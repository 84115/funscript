import push from '../list/push'

export default (start=0, stop=0, step=1) => {
  let a = [start]
  let b = start

  while (b < stop) {
    b += step

    push(a)(b)
  }

  return a;
}
