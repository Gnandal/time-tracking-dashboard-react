export const UserCard = () => {

    

    return (<>
        <div class="w-full max-w-sm bg-desaturated-blue py-10 px-6 rounded-lg shadow">
          <div class="flex flex-col gap-5 items-start pb-10">
            <img class="w-16 h-16 mb-3 rounded-full border-white border-2 shadow-lg" src="/src/assets/images/image-jeremy.png" alt="Jeremy image" />
            <div class='text-left'>
              <span class="text-sm text-pale-blue">Report for</span>
              <h5 class="mb-1 text-5xl font-medium text-gray-900 dark:text-white">Jeremy <br />Robson</h5>
            </div>
          </div>
        </div>
    </>);
}