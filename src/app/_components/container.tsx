type Props = {
    children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Container;
