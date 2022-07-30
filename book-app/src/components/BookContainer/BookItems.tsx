// export interface IBook {
//   title: string;
//   desc: string;
// }

function BookItems(props: any) {
  return (
    <>
      <div className="max-w-sm w-[15em] h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </div>
      </div>
    </>
  );
}
export default BookItems;
